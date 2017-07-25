$('.menu-handle').on('click', function(){
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $('#navbar').toggleClass('active');
    $('.caption').toggleClass('active');
});

$('#workSlider').slick({
    slidesToShow: 4,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    swipe: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    prevArrow: '<div class="prevArrow"><div class="arrow left"></div></div>',
    nextArrow: '<div class="nextArrow"><div class="arrow right"></div></div>',
    responsive: [
    {
      breakpoint: 1024,
      settings: 'unslick'
    }
  ]
});

$('#displaySlider').slick({
    arrows: false,
    swipe: false,
    focusOnSelect: false,
    variableWidth: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 1800,
});

$( document ).ready(function() {
    $('.slide-items').each(function(i){
        var row = $(this);
            setTimeout(function() {
                row.removeClass('starting');
            }, 33*i);
    });
    setTimeout(function() {
        $('.first-sec').css({
            opacity: 1
        })
    }, 700);
    setTimeout(function() {
        $('.second-sec').css({
            opacity: 1,
            left: 0
        })
    }, 700);
});

$('.handle-parent').on('click', function(){
    $('.handle-parent').removeClass('active');
    $(this).toggleClass('active');
});

$('.teamslider-parent').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
    }
  ]
});

var savedScroll, curScroll;
$(function() {
    $(window).on("mousewheel", function() {
        curScroll = $(document).scrollTop();
    });
});

$('.work-module').on('click', function(){
    $('#workDetail').addClass('active');
    $('#workHandle').addClass('active');
    $('.work-container').addClass('hidden');
    $('#navbar > .logo-container').addClass('hide');
    $('#navbar').addClass('naked');
    savedScroll = curScroll;
    setTimeout(
        function(){
            $('#workDetail').fullpage();
        },
    500);
});

$('#workHandle').on('click', function(){
    $('#workDetail').removeClass('active');
    $('#workHandle').removeClass('active');
    $('.work-container').removeClass('hidden');
    $('#navbar > .logo-container').removeClass('hide');
    setTimeout(
        function(){
            $.fn.fullpage.destroy('all');
            scrollTop: $(window).scrollTop(savedScroll);
            savedScroll = $(document).scrollTop()
        },
    300);
});

var workModule = $('.work-module');
var total, curData, filterData;

$('.filter-container > .filters').on('click', function(){
    $('.filter-container > .filters').removeClass('active');
    $(this).toggleClass('active');
    filterdata = $(this).data('filter');
    total = workModule.length;
    workModule.addClass('hide');

    workModule.each(function(){
    // $(this).addClass('hide');
        curData = $(this).data('category');
        if (curData.indexOf(filterdata) > -1) {

            $(this).removeClass('hide');
            $(this).removeClass('hidden');
        }
    });

    if (filterdata == 'all') {
        workModule.removeClass('hide');
    };
});
