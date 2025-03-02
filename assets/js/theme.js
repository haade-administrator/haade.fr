// optimize js to https://closure-compiler.appspot.com/home

jQuery(document).ready(function ($) {
  // toggle comments
  $(".show-comments").on("click", function () {
    $("#comments").toggleClass("comments--show");
  });

  //toggle search
  $(".show-search").on("click", function () {
    $(".bd-search").toggleClass("search--show");
  });

  // spoilers
  $(document).on("click", ".spoiler", function () {
    $(this).removeClass("spoiler");
  });
});

// deferred style loading
// var loadDeferredStyles = function () {
// 	var addStylesNode = document.getElementById("deferred-styles");
// 	var replacement = document.createElement("div");
// 	replacement.innerHTML = addStylesNode.textContent;
// 	document.body.appendChild(replacement);
// 	addStylesNode.parentElement.removeChild(addStylesNode);
// };
// var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
// 	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// if (raf) raf(function () {
// 	window.setTimeout(loadDeferredStyles, 0);
// });
// else window.addEventListener('load', loadDeferredStyles);

// Reset animations on page: body.preload
setTimeout(function () {
  document.body.className = "";
}, 500);

// Open/close navigation when clicked .nav-icon
$(document).ready(function () {
  $(".nav-icon").click(function () {
    $(".nav-icon").toggleClass("active");
  });
  $(".nav-icon").click(function () {
    $("#menu").toggleClass("active");
  });
  $(".nav-icon").click(function () {
    $("#blackover-nav").toggleClass("active");
  });
  $(".nav-icon").click(function () {
    $("body").toggleClass("active-side");
  });
});

// Close navigation when clicked .blackover (Black background)
$(document).ready(function () {
  $("#blackover-nav").click(function () {
    $(".nav-icon").removeClass("active");
  });
  $("#blackover-nav").click(function () {
    $("#menu").removeClass("active");
  });
  $("#blackover-nav").click(function () {
    $("#blackover-nav").removeClass("active");
  });
  $("#blackover-nav").click(function () {
    $("body").removeClass("active-side");
  });
});

// Grid selector Inspiration
$(document).ready(function () {
  $(".grid-selector").click(function () {
    $(".grid-selector").toggleClass("active");
  });
  $(".grid-selector").click(function () {
    $(".post").toggleClass("active");
  });
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    $(".nav-icon").removeClass("active");
    $("#menu").removeClass("active");
    $("#blackover-nav").removeClass("active");
    $("body").removeClass("active-side");
  }
});

// remove all :hover stylesheets on mobile
function hasTouch() {
  return (
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (hasTouch()) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
  });

  //Click event to scroll to top
  $(".scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
});

// DOCS

$(document).ready(function () {
  //Check to see if the back-menu is in the div
  $(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
      $(".back-page-button-dark").removeClass("back-page-button-w");
    } else {
      $(".back-page-button-dark").addClass("back-page-button-w");
    }
  });
});

// toggle DARK/LIGHT https://codepen.io/errbint/pen/VweGXZj
function switcher() {
  const mvr = document.getElementById("mover");
  const btn = document.getElementById("button");
  const body = document.getElementsByTagName("BODY")[0];

  if (btn.className == "button day") {
    mvr.style.transform = "translateY(-42px)";
    btn.className = "button night";
    btn.style.boxShadow = "0px 0px 16px rgba(255, 255, 255, 0.25)";
    body.style.backgroundColor = "#333333";
  } else {
    mvr.style.transform = "translateY(0)";
    btn.className = "button day";
    btn.style.boxShadow = "0px 0px 16px rgba(0, 0, 0, 0.25)";
    body.style.backgroundColor = "#F4F4F4";
  }
}
// end toggle DARK/LIGHT

// STICKY

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navtop = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navtop.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navtop.classList.add("sticky");
  } else {
    navtop.classList.remove("sticky");
  }
}

// end sticky

// add script for imagegallery include

$(document).ready(function () {
  $(".gallery-image").on("click", function () {
    var imgURL = $(this).attr("src");
    $("#imageBox").attr("src", imgURL);
  });
});

// video plyr embed to default.html

document.addEventListener('DOMContentLoaded', () => {

  const controls = [
      'play-large', // The large play button in the center
      'restart', // Restart playback
      'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      'fast-forward', // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      // 'current-time', // The current time of playback
      'duration', // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      // 'captions', // Toggle captions
      'settings', // Settings menu
      // 'pip', // Picture-in-picture (currently Safari only) problem with chrome
      'airplay', // Airplay (currently Safari only)
      // 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen' // Toggle fullscreen
  ];

  const player = Plyr.setup('.js-player', { controls });

});