'use strict';

/* ハンバーガーメニュー */
const overlayMenu = document.querySelector('.header__overlay');

document.getElementById('open').addEventListener('click', () => {
  openOverlayMenu();
});

document.getElementById('close').addEventListener('click', () => {
  closeOverlayMenu();
});

document.getElementById('blackBg').addEventListener('click', () => {
  closeOverlayMenu();
});

// 上で呼び出す各関数
const openOverlayMenu = () => {
  overlayMenu.classList.add('header__overlay--open');
  backgroundMask.classList.add('header__blackBg--mask');
}

const closeOverlayMenu = () => {
  overlayMenu.classList.remove('header__overlay--open');
  backgroundMask.classList.remove('header__blackBg--mask');
}


/* スクロールでトップに戻るボタンを表示 */
const buttonToPageTop = document.getElementById('goToPageTopLink')

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  showButtonOnScroll(scrollTop);
});

// 上で呼び出す関数
function showButtonOnScroll(scrollTop) {
  const pxChange = 1;
    if (scrollTop > pxChange) {
    buttonToPageTop.classList.add('fadeIn');
  } else {
    buttonToPageTop.classList.remove('fadeIn');
  }
}

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
