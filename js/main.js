'use strict';

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
const buttonToPageTop = document.getElementById('goToPageTopLink')

window.addEventListener('scroll', function (e) {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  showButtonOnScroll(scrollTop);
});

// 上で呼び出す関数
function showButtonOnScroll(scrollTop) {
  if (scrollTop > pxChange) {
    buttonToPageTop.classList.add('fadeIn');
  } else {
    buttonToPageTop.classList.remove('fadeIn');
  }
}

// anime.js利用
/* トップに戻るボタンのスムーズスクロール */
buttonToPageTop.addEventListener('click', function (e) {
  anime.remove('html, body');
  anime({
    targets: 'html, body',
    scrollTop: 0,
    dulation: 600,
    easing: 'easeOutCubic',
  });
  return false;
});


/* contact.htmlフォームのメールアドレス バリデーションチェック */
function inputValueCheck() {
  const inputEmail = document.getElementById('form-mail').value;
  const inputEmailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/ //入力ルール（正規表現）
  checkInputEmail(inputEmail, inputEmailPattern);
}

//上で呼び出す関数
function checkInputEmail(inputEmail, inputEmailPattern) {
  //指定したメールアドレスの形式と異なる場合は弾いてアラートmsgを表示
  if (inputEmailPattern.test(inputEmail)) {
    return submitted = true;
  } else {
    alert("メールアドレスの形式に誤りがあります。ご確認をお願いいたします。");
  }
}
