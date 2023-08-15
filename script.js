window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    document.querySelector(".parallax-background").style.transform = "translateY(" + offset * 0.5 + "px)";
  });