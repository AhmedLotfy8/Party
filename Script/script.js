$('.singerNumber').click(function(){
    $('.singerDetails').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

$("#leftMenu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})


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
