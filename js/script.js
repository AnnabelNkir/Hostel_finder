$(function () {

    $('#properties-slider').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
         nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
         responsive: [
             {
                 breakpoint: 1100,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     infinite: true,
                 }
             },
             {
                 breakpoint: 767,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     infinite: true,
                 }
             },
             {
                 breakpoint: 530,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                 }
             }
         ]
    });

 });