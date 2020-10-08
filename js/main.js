'use strict';




document.getElementById('goToPageTop').addEventListener("click", function () {

  let height = window.pageYOffset;
  let scrollTimer = 15;
  let scrollBase = height / scrollTimer;

  const scrollPageTop = () => {

    scrollTo(0, height - scrollBase);

  scrollPageTop();
  }
};

