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
const spMenu = document.querySelector('.st-headerSpMenu');

document.getElementById('hamburgerBtn').addEventListener('click', () => {
  spMenu.classList.add('is-open');
  spMenu.classList.remove('is-close');
	} );
	document.getElementById('closeBtn').addEventListener('click', () => {
    spMenu.classList.remove('is-open');
    spMenu.classList.add('is-close');
	} );