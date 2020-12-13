const page = document.querySelector("#landingPage");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let images = ["img/bg_1.jpg", "img/bg_2.jpg", "img/bg_3.jpg"];

window.onload = function () {
  $(() => {
    var i = 0;
    $("#landingPage").css({
      background: `url(${images[i]}) no-repeat center center/cover`,
      height: "initial",
      width: "100%",
      "background-attachment": "fixed",
    });

    setInterval(function () {
      i++;
      if (i == images.length) {
        i = 0;
      }
      $(page).fadeOut(1000, function () {
        $(this).css({
          background: `url(${images[i]}) no-repeat center center/cover`,
          height: "initial",
          width: "100%",
          "background-attachment": "fixed",
        });
        $(this).fadeIn(1000);
      });
    }, 10000);
  });
};
