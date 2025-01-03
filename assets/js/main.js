(function ($) {
  "use strict";
  feather.replace();
  $('header .mean-menu').meanmenu({
    meanMenuContainer: '.tab-nab',
    meanScreenWidth: 991
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".sticky-menu").addClass("sticky");
    } else {
      $(".sticky-menu").removeClass("sticky");
    }
  });
  $("#banner-slider").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    items: 1,
    vertical: true,
    nav: false,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
  $('#home2-client-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
  $('#client-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('#service-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $('#about-client-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
  $('#shop-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
  $('#team-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
  $('#team2-slider').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('.odometer').appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  $('#countdown').countdown('2022/06/01', function (event) {
    $(this).html(event.strftime('<ul class="date"><li><h4>%D</h4> <p>Days</p></li><li><h4>%H</h4> <p>Hrs</p></li><li><h4>%M</h4> <p>Mins</p></li><li><h4>%S</h4> <p>Secs</p></li></ul>'));
  });
  $('#news-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      676: {
        items: 2
      },
      768: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });
  $('#team3-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $('#choose-us-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });
  $('.circlechart').circlechart();
  window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.gotopbtn');
    scroll.classList.toggle("active", window.scrollY > 500);
  });
  $(".gotopbtn").on("click", function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1500)
  });
  $('input[type="number"]').niceNumber();
  $('select').niceSelect();
  // $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
}(jQuery));

function setTheme(themeName) {
  localStorage.setItem('my_theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('my_theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-dark');
  }
}
(function () {
  if (localStorage.getItem('my_theme') === 'theme-dark') {
    setTheme('theme-dark');
    // document.getElementById('slider').checked = false;
  } else {
    setTheme('theme-dark');
    // document.getElementById('slider').checked = true;
  }
})();
let mainImages = document.querySelectorAll(".main-image")

mainImages.forEach((item, index) => {
  Fancybox.bind(`[data-fancybox=gallery-${index}]`, {
    Thumbs: {
      type: "modern"
    }
  })
})