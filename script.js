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
//押すとスムーススクロール
pageTop.addEventListener('click', (e) => {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

//ハンバーガー
const spMenu = document.querySelector('.st-headerSpMenu');

document.getElementById('hamburgerBtn').addEventListener('click', () => {
  spMenu.classList.add('is-open');
  spMenu.classList.remove('is-close');
	} );
	document.getElementById('closeBtn').addEventListener('click', () => {
    spMenu.classList.remove('is-open');
    spMenu.classList.add('is-close');
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
    let set, slideCount  = function() {
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
    set = setInterval(slideCount, 5000);
    //ここまででボタン以外は動く

    //ここからはボタンを動かす
    //forEach関数
    let e = document.querySelectorAll(".lp-Mv__paginationBtn");
    //eは配列、indexはインデックス
    e.forEach((e, index)=> {
        //対応している配列のボタンをクリック
        e.addEventListener("click", () => {
            //ボタンを押すことで
            //インターバルタイマーをストップ。
            //一度変数setをリセット
            clearInterval(set),
            //セットインターバルは行うが…
            set = setInterval(slideCount, 5000),
            //ここで大事なのはindexを＋1すること。（0すたーとなので このままだと前の番号が表示されてしまう。）
            n = index + 1;
            //最後にnをindex＋1したスライド関数をするとOK！
            slide();
        })
    })
	})
