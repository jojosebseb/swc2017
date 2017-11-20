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
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1500,
    prevArrow: '<div class="prevArrow"><div class="arrow left"></div></div>',
    nextArrow: '<div class="nextArrow"><div class="arrow right"></div></div>',
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: 'unslick'
        }
  ]
});

$( window ).resize(function() {
    if ($(window).width() < 800) {
        $('#workSlider').slick('unslick');
        console.log('portrait');
    }
    else {
        $('#workSlider').slick({
            slidesToShow: 4,
            centerMode: true,
            variableWidth: true,
            arrows: true,
            swipe: true,
            focusOnSelect: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 1500,
            prevArrow: '<div class="prevArrow"><div class="arrow left"></div></div>',
            nextArrow: '<div class="nextArrow"><div class="arrow right"></div></div>',
            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: 'unslick'
                }
          ]
        });
    }

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





$('#aboutClients .flex-module').each(function(i){
    $(this).css({
        'transition-delay': ((i/10)+0.1)+'s'
    });
});
var horMul = 0;
var vertFinal = 0;
var countLoop = 0;
var vertMul = 0;
var moduleWidth = 490;
var moduleHeight = 301;
var moduleCount;

if ($(window).width() < 1050) {
   // alert('Less than 960');
}
else {
   // alert('More than 960');
   workSetup();
}

function workSetup(){
    moduleCount = $('#workParent .work-module').length;
    // console.log((moduleCount*moduleHeight)/2);
    $('.work-container').css({
        display: 'block',
        height: ((moduleCount*moduleHeight)/2)+150
    });
    $('#workParent .work-module').each(function(i){
        moduleWidth = $(this).width()+20;
        moduleHeight = $(this).height()+20;
        if (countLoop >= 2) {
            vertMul++;
            countLoop = 1;
        }
        else {
            countLoop++
        }
        horMul = ((countLoop-1)*(moduleWidth));
        vertFinal = (vertMul*(moduleHeight));
        $(this).css({
            left: horMul +'px',
            top: vertFinal + 'px',
            position: 'absolute'
        });
    });

}

function filterSetup(){
    horMul = 0;
    vertFinal = 0;
    countLoop = 0;
    vertMul = 0;
    moduleCount = $('#workParent .work-module.active').length;
    $('.work-container').css({
        display: 'block',
        height: ((moduleCount*moduleHeight)/2)+150
    });
    $('#workParent .work-module.active').each(function(i){
        console.log(i);
        moduleWidth = 490+20;
        moduleHeight = 300+20;
        if (countLoop >= 2) {
            vertMul++;
            countLoop = 1;
        }
        else {
            countLoop++
        }
        horMul = ((countLoop-1)*(moduleWidth));
        vertFinal = (vertMul*(moduleHeight));
        $(this).css({
            left: horMul +'px',
            top: vertFinal + 'px',
            position: 'absolute',
            'transition-delay': i/20+'s'
        });
    });

}

var workModule = $('.work-module');
var total, curData, filterData;

$('.filter-container > .filters').on('click', function(){
    $('.filter-container > .filters').removeClass('active');
    $(this).toggleClass('active');
    filterdata = $(this).data('filter');
    total = workModule.length;
    workModule.addClass('active');
    workModule.addClass('hide');
    workModule.each(function(){
        curData = $(this).data('category');
        if (curData.indexOf(filterdata) > -1) {
            $(this).removeClass('hide');
            $(this).removeClass('hidden');
        }
        else {
            $(this).removeClass('active');
        }
    });
    if (filterdata == 'all') {
        workModule.removeClass('hide');
        workModule.addClass('active');
    };
    if ($(window).width() < 1050) {
       // alert('Less than 960');
    }
    else {
       // alert('More than 960');
       filterSetup();
    }

});

$('.section-container').waypoint(function(){
    var id = $(this.element).attr('id');
    console.log(id);
    $(this.element).addClass('closed');
}, {
  offset: '70%'
})
