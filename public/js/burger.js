const mediaQuery = window.matchMedia("(max-width: 600px)");

let dropdown = () => {
  $("nav").removeClass("navheight");
  $(".navmenu").css({ display: "block" });
  $("nav").css({ "grid-template-rows": "10vh auto" });
};

let pickup = () => {
  $("nav").addClass("navheight");
  $(".navmenu").css({
    display: "none",
    "place-self": "center",
    transition: "all, 0.5s",
  });
  $("nav").css({ "grid-template-rows": "10vh" });
};

if (mediaQuery.matches) {
  $(
    (burger = function () {
      if ($("nav").attr("class") == "navheight") {
        dropdown();
      } else if ($("nav").attr("class") == "") {
        pickup();
      }
    })
  );
}
