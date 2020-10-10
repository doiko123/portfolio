'use strict';

// anime.js利用
/* ハンバーガーメニュー */
const menuOpen = document.getElementById('open');
const menuClose = document.getElementById('close');
const overlayMenu = document.querySelector('.header__overlay');
const backgroundMask = document.getElementById('blackBg')

menuOpen.addEventListener('click', function (e) {
  openOverlayMenu();
});

menuClose.addEventListener('click', function (e) {
  closeOverlayMenu();
});

backgroundMask.addEventListener('click', function (e) {
  closeOverlayMenu();
});


// 上で呼び出す各関数
function openOverlayMenu() {
  overlayMenu.classList.add('header__overlay--open');
  backgroundMask.classList.add('header__blackBg--mask');
}

function closeOverlayMenu() {
  overlayMenu.classList.remove('header__overlay--open');
  backgroundMask.classList.remove('header__blackBg--mask');
}


/* スクロールでトップに戻るボタンを表示 */
const pxChange = 1;

window.addEventListener('scroll', function (e) {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > pxChange) {
    document.getElementById("goToPageTopLink").classList.add("fadeIn");
  } else {
    document.getElementById("goToPageTopLink").classList.remove("fadeIn");
  }
});

/* トップに戻るボタンのスムーズスクロール */
document.getElementById("goToPageTopLink").addEventListener('click', function (e) {
  anime.remove("html, body");
  anime({
    targets: "html, body",
    scrollTop: 0,
    dulation: 600,
    easing: 'easeOutCubic',
  });
  return false;
});

/* contact.htmlフォームのメールアドレス バリデーションチェック */
function inputValueCheck() {
  const inputEmail = document.getElementById("form-mail").value;
  checkInputEmail(inputEmail);
}

//指定したメールアドレスの形式と異なる場合は弾いてアラートmsgを表示
function checkInputEmail(inputEmail) {
  const inputEmailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/ //入力ルール（正規表現）

  if (inputEmailPattern.test(inputEmail)) {
    return submitted = true;
  } else {
    alert("メールアドレスの形式に誤りがあります。ご確認をお願いいたします。")
  }
}
