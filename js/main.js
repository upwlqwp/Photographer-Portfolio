$(function () {
  $(".burger, .menu a").on("click", function () {
    $(" .burger__lines, .menu__list").toggleClass("active");

    $("body").toggleClass("lock");
  });

  $(".menu,.header__link").on("click", "a", function (event) {
    event.preventDefault();

    let id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$window = $(window);
$window.scroll(function () {
  $scrollPosition = $window.scrollTop();
  if ($scrollPosition > 50) {
    $(".header__top").addClass("header__top--bg");
  } else {
    $(".header__top").removeClass("header__top--bg");
  }
});

const mixer = mixitup(".portfolio__content");
