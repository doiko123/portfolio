'use strict';

// anime.js利用

/*スクロールでトップに戻るボタンを表示*/
const pxChange = 1;

window.addEventListener('scroll', function (e) {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > pxChange) {
    document.getElementById("goToPageTopLink").classList.add("fadeIn");
  } else {
    document.getElementById("goToPageTopLink").classList.remove("fadeIn");
  }
});

/*トップに戻るボタンのスムーズスクロール*/
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
