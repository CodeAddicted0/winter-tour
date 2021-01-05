const page = document.querySelector("#landingPage");

let images = ["img/bg_1.jpg", "img/bg_2.jpg", "img/bg_3.jpg"];

window.onload = function () {
  $(() => {
    var i = 0;
    $(page).css({
      background: `-webkit-linear-gradient(60deg, rgba(0, 127, 255, 0.7) 17%, rgba(9, 9, 121, 0.7) 100%), url(${images[i]}) no-repeat center center/cover`,
    });

    setInterval(function () {
      i++;
      if (i == images.length) {
        i = 0;
      }
      $(page).fadeOut(1000, function () {
        $(this).css({
          background: `-webkit-linear-gradient(60deg, rgba(0, 127, 255, 0.7) 17%, rgba(9, 9, 121, 0.7) 100%), url(${images[i]}) no-repeat center center/cover`,
        });
        $(this).fadeIn(1000);
      });
    }, 10000);
  });
};
