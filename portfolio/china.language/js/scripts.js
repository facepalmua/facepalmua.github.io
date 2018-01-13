	$(function(){
		$('#menu').slicknav({
          label: ''
        });
	});


  $('.bxslider1_s4').bxSlider({
    slideWidth: 270,
    pager: false
  });



  $('.bxslider2_s8').bxSlider({
    slideWidth: 647,
    slideHeight: 330,
    pager: true
  });


$('.bxslider3_s9').bxSlider({
    slideWidth: 195,
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 0,
    pager: false
  });

$('.bxslider4_s13').bxSlider({
    slideWidth: 180,
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 0,
    pager: false
  });

$(".modal_class").click(function(){
        $("#myModal").modal();
});


$(document).ready(function() {
 
$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});
    
});

$(".hsk1").click(function(){
  $('.content1').css('display','inline-block'),
  $('.content2').css('display','none'),
  $('.content3').css('display','none'),
  $('.content4').css('display','none'),
  $('.content5').css('display','none'),
  $('.content6').css('display','none')
});

$(".hsk2").click(function(){
  $('.content1').css('display','none'),
  $('.content2').css('display','inline-block'),
  $('.content3').css('display','none'),
  $('.content4').css('display','none'),
  $('.content5').css('display','none'),
  $('.content6').css('display','none')
});

$(".hsk3").click(function(){
  $('.content1').css('display','none'),
  $('.content2').css('display','none'),
  $('.content3').css('display','inline-block'),
  $('.content4').css('display','none'),
  $('.content5').css('display','none'),
  $('.content6').css('display','none')
});

$(".hsk4").click(function(){
  $('.content1').css('display','none'),
  $('.content2').css('display','none'),
  $('.content3').css('display','none'),
  $('.content4').css('display','inline-block'),
  $('.content5').css('display','none'),
  $('.content6').css('display','none')
});

$(".hsk5").click(function(){
  $('.content1').css('display','none'),
  $('.content2').css('display','none'),
  $('.content3').css('display','none'),
  $('.content4').css('display','none'),
  $('.content5').css('display','inline-block'),
  $('.content6').css('display','none')
});

$(".hsk6").click(function(){
  $('.content1').css('display','none'),
  $('.content2').css('display','none'),
  $('.content3').css('display','none'),
  $('.content4').css('display','none'),
  $('.content5').css('display','none'),
  $('.content6').css('display','inline-block')
});
