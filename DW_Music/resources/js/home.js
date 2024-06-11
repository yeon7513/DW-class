'use strict';

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((el, idx) => {
  el.addEventListener('click', function () {
    if (idx === 0) {
      location.href = 'main.html';
    }
  });
});
