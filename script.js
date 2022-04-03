//ふわっと現れるスムーススクロールボタン
//window.pageYOffsetに関する変数はイベントリスナーが着火した後
//（イベントリスナー内）に入れないと正常に作動しない
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
const smoothScroll = () =>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
//押すとスムーススクロール
pageTop.addEventListener('click', (e) => {
	e.preventDefault();
  smoothScroll();
});
//ロゴボタン押したときも同様
const logo = document.querySelectorAll('h1 a');
for(let i = 0 ; i <logo.length;  i++)
logo[i].addEventListener('click', (e) => {
	e.preventDefault();
  smoothScroll();
});



//ハンバーガー
const spMenu = document.querySelector('.st-headerSpMenu');

document.getElementById('hamburgerBtn').addEventListener('click', () => {
  spMenu.classList.add('is-open');
  spMenu.classList.remove('is-close');
	} );
const close = () => {
  spMenu.classList.remove('is-open');
  spMenu.classList.add('is-close');
}

	document.getElementById('closeBtn').addEventListener('click', () => {
    close();
	} );
  let spMenuLink = document.getElementsByClassName('st-headerSpMenuNavListItemLink');
  for(let i = 0 ; i < spMenuLink.length;  i++)
  spMenuLink[i].addEventListener('click', () => {
    close();
    } );
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
    // s、u関数
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
