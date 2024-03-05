

new WOW().init();


/*******************************************************************************************/



$('.loginslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
       // nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1000: {
                items: 1
            }
            ,
            1950: {
                items: 1
            }
        }
})


/*******************************************************************************************/


$(window).load(function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(500).fadeOut('slow');
});