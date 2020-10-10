'use strict';

// anime.js利用

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
