const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

// toggle button navbar 
	$(document).ready(function(){
		$nav = $('.nav');
		$toggleCollapse = $('.toggle-collapse');

		$toggleCollapse.click(function(){
			$nav.toggleClass('collapse');
		})
	})

// owl-crousel for blog
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            fluidSpeed:true,
            dots: false,
            responsive: responsive
      });
    });

//gsap animation
const background = document.querySelector(".site-title");
const hello = document.querySelector("#hello");
const name = document.querySelector(".name");
const title = document.querySelector(".title");
const explore = document.querySelector(".explore");
const box = document.querySelector(".box");

const tl = new TimelineMax();

tl.fromTo(hello, 2, {x:"20%",fontSize:"100%", opacity: 0}, {x:"20%",fontSize:"700%",opacity:1,ease:Power2.easeInOut})
.to(hello, 1.2, {x:"0%",fontSize:"100%",opacity:1,ease:Power2.easeInOut})
.fromTo(name, 1.2, {x:"-100%", opacity:0}, {x:"0%", opacity:1,ease:Power2.easeInOut}, "-=0.9")
.fromTo(title, 1.2, {opacity:0}, {opacity:1,ease:Power2.easeInOut})
.fromTo(box, 1.2, {width:"0%"}, {width:"70%",ease:Power2.easeInOut})


var skills = new TimelineMax();
var tech = new TimelineMax();
const controller = new ScrollMagic.Controller();

//the animation jutsu
skills.fromTo(".box-skills", 1.2, {width:"0%"}, {width:"20%",ease:Power2.easeInOut});
tech.fromTo(".box-tech", 1.2, {width:"0%"}, {width:"20%",ease:Power2.easeInOut});


//for scroll magic
const scene = new ScrollMagic.Scene({
          triggerElement: ".box-skills"
        }).setTween(skills).addTo(controller);

const scene2 = new ScrollMagic.Scene({
          triggerElement: ".box-tech"
        }).setTween(tech).addTo(controller);

// click to scroll top
$('.go-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})

// smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

// initialize the aos animation
AOS.init();