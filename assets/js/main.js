//Remember al amin, to use owl, or any js plugin it is must to place link in tmml higherarchy
$(document).ready(function () {
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplayTimeout: 3000,
        nav: false,
        autoplayHoverPause: true,
        dots: false,
        autoplay: true,
        touchDrag: false,
        //      animateOut: 'fadeOut',
        smartSpeed: 1000,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       //responsive menu
//   $('#mainMenuActivation').meanmenu({
//       meanMenuContainer: '.mobileMenuResponsive',
//       meanScreenWidth: "1000",
//   });
//    
    
    $(".mainMenu").slicknav({
    prependTo: ".mobileMenuResponsive"
});

    
    
    
    
    
    
});

//blog carousel
$(document).ready(function () {
    $('.blog-parentControl').owlCarousel({
        loop: true,
        mouseDrag: false,
        margin: 20,
        stagePadding:10,
        autoplayTimeout: 4000,
        nav: true,
        autoplayHoverPause: true,
        dots: false,
        touchDrag: false,
        autoplay: true,
        //      animateOut: 'fadeOut',
        smartSpeed: 1000,

        responsive: {
            0: {
                items: 1
            },
            712: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
});


//    magnificpopUp
$('.portfolioVideoBg').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'iframe', //when its need to use image just type : image
    //        gallery:{
    //    enabled:true
    //  }
    // other options
});


//scrollToTop
$(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed:200, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});



//wow js animation

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 120, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
});
wow.init();





//navigator
$(document).ready(function () {
    $('#nav-single-page').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1300,

    });
});






$(document).ready(function () {
    "use strict"

    $('.hero-bg').ripples({
        dropRadius: 30,
        perturbance: 0.04,
        resolution: 512,
    });


 
    
    
    
    

});

//its for off canvas menu
$(".hamberger-menu").click(function () {
    $(".sideBarProfile").addClass("active");
    $(".off-canvas-overlay").addClass("active");
});
$(".sideClose .fa, .off-canvas-overlay").click(function () {
    $(".sideBarProfile").removeClass("active");
    $(".off-canvas-overlay").removeClass("active");
});









//search box
$(document).ready(function () {
    $(".main-menu nav ul li i.template-searchBox, i.fa.fa-search.template-searchBox").click(function () {
        $("form#template-search-box-main").slideToggle(100);
    });


//    $("body").niceScroll({
//        cursorcolor: "#0479fc",
//        boxzoom: true,
//        scrollspeed: 80,
//        mousescrollstep: 60,
//        cursorborder: "1px solid transparent",
//        horizrailenabled: false,
//        cursorwidth: "10",
//
//
//    });
});
$(".sideBarProfile").niceScroll({
    cursorcolor: "#0479fc",
    boxzoom: true,
    scrollspeed: 80,
    mousescrollstep: 60,
    cursorborder: "1px solid transparent",
    horizrailenabled: false,
    cursorwidth: "0",

});







$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 500) {
        $(".main-menu-section").removeClass("sticky");
    } else {
        $(".main-menu-section").addClass("sticky");
    }
});




//parallax

//$('#hero-bg').parallax("50%", 0.3);
//$('.hireButton').parallax("50%", 0.1);

//single page nav



$(document).ready(function () {
    $('#single-page-navigation').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1300,

    });
});

//mean menu for mobile menu
jQuery(document).ready(function () {
    jQuery('#nav-single-page').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1000",
        meanExpand: "+",
    });
})



//    progressbar| for every item you should be using unique id


$('#bar1').barfiller({
    barColor: "#1970fc",
});
$('#bar2').barfiller({
    barColor: "#1970fc",
});
$('#bar3').barfiller({
    barColor: "#1970fc",
});
$('#bar4').barfiller({
    barColor: "#1970fc",
});
$('#bar5').barfiller({
    barColor: "#1970fc",
});
$('#bar6').barfiller({
    barColor: "#1970fc",
});





//project filtering
$(".project-filtering-btn li").on('click', function () {

    $(".project-filtering-btn li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $(".filteingParent").isotope({
        filter: selector
    });

});



//    Filtering
$(".parent-texting").isotope({});

//using jQuery document ready function is must here
jQuery(document).ready(function ($) {
    $(".image-filtering-btn li").on('click', function () {

        $(".image-filtering-btn li").removeClass("active");
        $(this).addClass("active");



        var selector = $(this).attr('data-filter');
        $(".parent-texting").isotope({
            filter: selector
        });

    });

});
