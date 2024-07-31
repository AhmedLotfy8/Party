// Scrolling animation

// $("#NavBar .navMenu a").click(function(){

//     var sectionId = $(this).attr("href");
//     var positionOfSection = $(sectionId).offset().top;
                                                // 2 seconds of waiting before the animation starts, not 2 seconds of animation duration
//     $("html , body").animate({scrollTop:positionOfSection},2000);
// })

//Singers
$(document).ready(function () {
    $('.singerDetails1').slideDown(500)
})

$('.singerNumber').click(function () {
    $('.singerDetails').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});



// Counter
var countDownDate = new Date("august 25, 2024 15:37:25").getTime();
setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((distance % (1000 * 60)) / 1000);

    $(".day").html(`${days} D`);
    $(".hour").html(`${hours} h`);
    $(".minute").html(`${mins} m`);
    $('.second').html(`${secs} s`)


}, 1000);


// Character counter
$('textarea').on('input', function () {
    var charCount = $(this).val().length;

    if (charCount < 100)
        $('form span').text(100 - charCount)

    else {
        $('form span').text('Your available characters finished')
    }

})


// Sliding Nav bar effect
$('.nav .navBtn p').on('click', function () {

    $('.nav .navMenu').toggleClass('active');

    // Move to the left
    if ($('.nav .navMenu').hasClass('active')) {

        $('.nav .navBtn').css('transform', 'translateX(' + $('.nav .navMenu').outerWidth(true) + 'px)');

    }

    // move to the right
    else {
        $('.nav .navBtn').css('transform', 'translateX(0)');
    }

});

$('.nav .navMenu i').on('click', function () {

    $('.nav .navMenu').removeClass('active')
    $('.nav .navBtn').css('transform', 'translateX(0)');

})

setInterval()
