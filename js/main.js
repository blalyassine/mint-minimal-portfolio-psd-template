$(document).ready(function () {
    // nav-porfolio 
    var mixer = mixitup('#porfolio');

    $(".nav-porfolio ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    });
     new WOW().init()
     
    //carousel client
    var slider = tns({
        "slideBy": "page",
        "mouseDrag": true,
        "autoplayButtonOutput": false,
        "autoplay": true,
        "items": 1,
        "controls": false,
        "responsive": {
          "400": {
            "items": 2,
            "edgePadding": 30
          },
          "500": {
            "items": 3
          },
          "1000": {
            "items": 5
          }
        },
        container: '.client-slider',
        autoplay: true,
        "swipeAngle": false,
        "speed": 300
    });


    /*
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel();
      });*/
});