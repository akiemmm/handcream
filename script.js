//ふわっと現れるスムーススクロールボタン
//window.pageYOffsetに関する変数はイベントリスナーが着火した後
//（イベントリスナー内）に入れないと正常に作動しない
//IntersectionObserverでもできるが、この処理は別にしたい。
const pageTop = document.getElementById('pageTop');
window.addEventListener('scroll', () => {
	const currentY = window.pageYOffset;
	if (currentY > 200) {
		pageTop.classList.add('is-active');
	} else {
		pageTop.classList.remove('is-active');
	}
});
window.addEventListener('DOMContentLoaded', () => {
	const currentY = window.pageYOffset;
	if (currentY > 200) {
		pageTop.classList.add('is-active');
	} else {
		pageTop.classList.remove('is-active');
	}
});
//smoothScrollの関数
const smoothScrollTop = () =>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
//押すとスムーススクロール
pageTop.addEventListener('click', (e) => {
	e.preventDefault();
  smoothScrolllTop();
});
//ロゴボタン押したときも同様
const logo = document.querySelectorAll('h1 a');
for(let i = 0 ; i <logo.length;  i++){
logo[i].addEventListener('click', (e) => {
	e.preventDefault();
  smoothScrolllTop();
})};


//初期ウィンドウサイズが1024px超えなら120px、
  //そうでなければ64px
//参照https://zenn.dev/yuki0410/articles/878f4afbff6668d4e28a-2
const ltSize = window.matchMedia("(max-width:1024px)");

//ノートパソコン（ラップトップ）リスナー関数
    const listenerLt = (e) => {
      // リサイズ時に行う処理
      if (e.matches) {
        gap = 64;
      } else {
        gap = 120 ;
      }
};
// リスナー登録
ltSize.addEventListener("change", listenerLt);
// 初期化処理
listenerLt(ltSize);
    


 //アンカーリンクを選択した際、スムーススクロールしてほしい
//アンカーリンクであれば、動くことが可能
//参照：https://flex-box.net/js-smoothscroll/#co-index-6   
const smoothScroll = () =>{
	const smoothScrollAnker = document.querySelectorAll('a[href^="#"]');
	for (let i = 0; i < smoothScrollAnker.length; i++){
    smoothScrollAnker[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollAnker[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
	}
}
smoothScroll();


//ハンバーガー
//開く時
//ハンバーガーが開いている場合、bodyが動かないように設定
//参照https://tech.arms-soft.co.jp/entry/2021/10/06/090000

const html = document.querySelector('html')
const spMenu = document.querySelector('.st-headerSpMenu');
const headerHeight = 64 //ヘッダーの高さ
const hambergerBtn = document.getElementById('hamburgerBtn');

let bodyHeight //ウィンドウの高さを入れる場所
let scrollpos //スクロールの位置を入れる場所

// ハンバーガーメニューの開閉
//開いた場合
hambergerBtn.addEventListener('click', () => {
  spMenu.classList.add('is-open');
  spMenu.classList.remove('is-close');
    // 現在のスクロール位置を取得する
    scrollpos = window.pageYOffset
    // メニューが開いたことを示すクラスをhtmlに付与する
    html.classList.add('is-menuOpen')
    // bodyのtopにスクロール位置を付与する
    document.body.style.top = scrollpos * -1 + 'px'
    // ウィンドウの高さを取得
    bodyHeight = window.innerHeight
    // 取得した高さを、メニューに付与する（ヘッダーの高さを引いた数）
    spMenu.style.height = bodyHeight - headerHeight + 'px'
    smoothScroll();
});

//×ボタン以外も、リンクを選択した際も閉じるため、close関数でまとめておく。
const close = () => {
  spMenu.classList.remove('is-open');
  spMenu.classList.add('is-close');
  // メニューが開いたことを示すクラスをはずす
  html.classList.remove('is-menuOpen')
  // スクロール位置を開いた時の位置へ戻す
  window.scrollTo(0, scrollpos)
}

document.querySelector('.st-headerSpMenuNav .sw-btn.buy').addEventListener('click', () => {
	close();
});

document.getElementById('closeBtn').addEventListener('click', () => {
	close();
});

let spMenuLink = document.querySelectorAll('.st-headerSpMenuNav a');
for(let i = 0 ; i < spMenuLink.length;  i++){
  spMenuLink[i].addEventListener('click', () => {
    smoothScroll();
    close();
})};
//MVスライド
window.addEventListener('DOMContentLoaded', () => {
	let tpMvList = document.querySelector('.lp-mv__list');
	tpMvList.classList.add("lp-mv__list--01");
	n = 1;
    //  いったんすべてのクラス名は外す。クラス名付与し、動作する。
    function slide(){
			tpMvList.classList.remove("lp-mv__list--01", "lp-mv__list--02", "lp-mv__list--03");
			tpMvList.classList.add("lp-mv__list--0" + n);
      };
    // set, slideCount関数
    let set, slideCount = function() {
        //3がnだった場合、nは1になり、
				//そうでない場合はn++されslide関数が実行される
				if(3===n){
					n = 1;
				} else {
					n++;
				};
        slide();
    }
    //700msでsetInterbvalをセット
    //slideLoopは与えられたあらかじめセットした第一関数。
    //とりあえず関数与えないと動かない
    set = setInterval(slideCount, 4000);
    //ここまででボタン以外は動く

    //ここからはボタンを動かす
    //forEach関数
    let e = document.querySelectorAll(".lp-mv__paginationBtn");
    //eは配列、indexはインデックス
    e.forEach((e, index)=> {
        //対応している配列のボタンをクリック
        e.addEventListener("click", () => {
            //ボタンを押すことで
            //インターバルタイマーをストップ。
            //一度変数setをリセット
            clearInterval(set),
            //セットインターバルは行うが…
            set = setInterval(slideCount, 4000),
            //ここで大事なのはindexを＋1すること。（0すたーとなので このままだと前の番号が表示されてしまう。）
            n = index + 1;
            //最後にnをindex＋1したスライド関数をするとOK！
            slide();
    })
  })
})
//スクロールアニメーション

//IntersectionObserver
//仮にoptionを設定
const option = {
  threshold: [0.05]
};
//is-active
//コールバックを設定
//関数「callback」の第一引数にはIntersectionObserverEntryオブジェクトが入る
function callback(entries) {
  //第一引数entries連想配列＝「IntersectionObserverEntryオブジェクト」をforEachでループする。この場合entryを引数にした無名関数をループする。
    entries.forEach(function(entry){
    //isIntersectioningプロパティは交差しているかどうかのbool値（true、false）
    //webAPI固有のプロパティ
    //viewport 入ったときにisIntersecting===true 出たときにfalse
    if(entry.isIntersecting){
      entry.target.classList.add('is-animation');
    }
  });
};
  //まずIntersection observerインスタンス作成
  //ターゲットがIntersectionObserverに指定された閾値を満たすたびに
  //callback関数が呼び出される。
  //第一引数のcallback関数と、第二引数のoptionを設定
  const io = new IntersectionObserver(callback, option);
  //ここでは監視したい複数要素をターゲットにする
  const jsAnimation = document.querySelectorAll('.js-animation');
  //targets（.targetBox)の数のたび、io=「IntersectionObserverインスタンス」監視対象にする。
  jsAnimation.forEach(function(target){
    //IntersectionObserverインスタンスをobserve（監視する）
    io.observe(target);
});
