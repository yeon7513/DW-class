const imgArr = [
  'flower1.jpg',
  'flower2.jpg',
  'flower3.jpg',
  'flower4.jpg',
  'flower5.jpg',
];

$(document).ready(function () {
  $('button').on('click', function () {
    const randNum = parseInt(Math.random() * 5);
    const img = $(
      `<img
        src="./img/${imgArr[randNum]}"
        width="200"
        height="200"
      />`
    );
    img.appendTo('body');
  });
});
