/*HAMBURGER MENU */
function closeMenu() {
  document .getElementById("hamburgermenu") .style .height = "0%";
  document.getElementById("hamburgerbtn").style.display = "block";
}

function openMenu() {
  document .getElementById("hamburgermenu") .style .height = "100%";
  document.getElementById("hamburgerbtn").style.display = "none";
}

/* PARALLAX BACKGROUND */
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight - e.pageY*speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

/* FADE IN */
const faders = document.querySelectorAll('.fade p, .fade h2')

const appearOptions = {
  threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver (function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* ROUND BG */
var hHeight = $("html").height(),
    radius  = 100;

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop(),
      percent   = 100 - ((100*scrollTop)/hHeight) * 2;
  $(".flex-case-1").css("border-top-right-radius, border-top-left-radius", percent + "%");
});

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop(),
      percent   = 110 - ((110*scrollTop)/hHeight) * 2;
      $(".flex-case-2").css("border-top-right-radius, border-top-left-radius", percent + "%");
});
