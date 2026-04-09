/*  ---------------------------------------------------
    Template Name: Phozogy
    Description:  Phozogy photography HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    // Isotppe Filter
    $(".filter-controls li").on('click', function() {
        var filterData = $(this).attr("data-filter");

        $(".portfolio-filter, .gallery-filter").isotope({
            filter: filterData,
        });

        $(".filter-controls li").removeClass('active');
        $(this).addClass('active');
    });

    $(".portfolio-filter, .gallery-filter").isotope({
        itemSelector: '.pf-item, .gf-item',
        percentPosition: true,
        masonry: {
        // use element for option
        columnWidth: '.pf-item, .gf-item',
        horizontalOrder: true,
      }
    });

    //Masonary
    $('.portfolio-details-pic').masonry({
        itemSelector: '.pdp-item',
        columnWidth: '.pdp-item'
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".categories-slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        dots: false,
        nav: true,
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        stagePadding: 120,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

})(jQuery);
const scrollBtn = document.getElementById("scrollTopBtn");

    // Show button on scroll
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    // Scroll to top
    scrollBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };



// RTL Toggle (Desktop + Mobile)
// RTL Toggle
document.addEventListener("click", function(e) {
  if (e.target.closest(".rtl-btn")) {
    let isRTL = document.body.classList.toggle("rtl");

    // Save
    localStorage.setItem("layoutDirection", isRTL ? "rtl" : "ltr");

    // Update ALL buttons (desktop + mobile)
    document.querySelectorAll(".rtl-btn span").forEach(el => {
      el.innerText = isRTL ? "RTL" : "LTR";
    });
  }
});

// Load RTL
window.addEventListener("load", () => {
  const direction = localStorage.getItem("layoutDirection");

  if (direction === "rtl") {
    document.body.classList.add("rtl");
  }

  // Set correct text on load
  document.querySelectorAll(".rtl-btn span").forEach(el => {
    el.innerText = direction === "rtl" ? "RTL" : "LTR";
  });
});



// Dark Mode
function setTheme(theme) {
  const buttons = document.querySelectorAll(".theme-btn");

  if (theme === "dark") {
    document.body.classList.add("dark");
    buttons.forEach(btn => btn.textContent = "☀️");
  } else {
    document.body.classList.remove("dark");
    buttons.forEach(btn => btn.textContent = "🌙");
  }

  localStorage.setItem("theme", theme);
}

// Toggle (Desktop + Mobile)
document.addEventListener("click", function(e) {
  if (e.target.closest(".theme-btn")) {
    const isDark = document.body.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }
});

// Load Theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});




    
