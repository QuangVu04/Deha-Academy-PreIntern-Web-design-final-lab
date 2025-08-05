$(document).ready(function () {
  $(".ad-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:
      '<button class="tgdd-arrow tgdd-prev"><i class="icon-prev"></i></button>',
    nextArrow:
      '<button class="tgdd-arrow tgdd-next"><i class="icon-next"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<button class="tgdd-arrow tgdd-prev" "><i class="icon-prev"></i></button>',
    nextArrow:
      '<button class="tgdd-arrow tgdd-next"><i class="icon-next"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".slider-nav",
    centerMode: true,
    prevArrow:
      '<div class="custom-prev"><i class="fa fa-angle-left"></i></div>',
    nextArrow:
      '<div class="custom-next"><i class="fa fa-angle-right"></i></div>',
  });

  $(".slider-nav").slick({
    slidesToShow: 11,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    focusOnSelect: true,
  });

  $(".product-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    dots: true,
    arrows: false, 
    responsive: [
    {
      breakpoint: 488,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
  });

  $(".slider-nav").on("afterChange", function (event, slick, currentSlide) {
    console.log("Đang ở slide số:", currentSlide);
    document.getElementById("current-slide").innerText = String(
      currentSlide + 1
    );
  });
});

fetch("./header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("./footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

function open() {
  const hiddenItems = document.querySelectorAll(".hidden.fmn");
  hiddenItems.forEach((item) => item.classList.remove("hidden"));

  // Ẩn nút "Xem thêm" sau khi nhấn
  document.querySelector(".showtaga").style.display = "none";
}
function close() {
  document
    .querySelectorAll(".fmn")
    .forEach((item) => item.classList.add("hidden"));

  document.querySelector(".showtaga").style.display = "inline";
  document.querySelector(".closetaga").style.display = "none";
}

function showSuggest() {
  document.getElementById("search-suggest").style.display = "block";
}

function hideSuggest() {
  setTimeout(() => {
    document.getElementById("search-suggest").style.display = "none";
  }, 200);
}

let timerId = null;
let remainingSeconds = 86400;

function renderClock() {
  let hour = Math.floor(remainingSeconds / 3600);
  let minute = Math.floor((remainingSeconds % 3600) / 60);
  let second = remainingSeconds % 60;

  updateText("hr", hour);
  updateText("min", minute);
  updateText("sec", second);
}

function updateText(string, number) {
  document.getElementById(string).innerText = String(number).padStart(2, "0");
}

function clock() {
  if (remainingSeconds <= 0) {
    timerId = null;
    clearTimeout(timerId);
    return;
  }

  remainingSeconds--;
  renderClock();
  timerId = setTimeout(clock, 1000);
}
