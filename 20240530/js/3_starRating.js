'use strict';

const stars = document.querySelectorAll('.star');

function checkStars(click) {
  stars.forEach((star, index) => {
    click >= index
      ? star.classList.add('active')
      : star.classList.remove('active');
  });
}
