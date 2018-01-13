$(document).ready(function(){
    maxwidth = $(window).width()+20;
    if (maxwidth<479){
  $('.slider').bxSlider({
    mode: 'vertical',
    minSlides: 2,
    maxSlides: 6,
    moveSlides: 2,
    slideMargin: 117
  });        
    }
    if (maxwidth>=480){
$('.slider').bxSlider({
            slideWidth: 368,
    minSlides: 2,
    maxSlides: 6,
    moveSlides: 2,
    slideMargin: 117
  });        
    }
    
});
$(document).ready(function() { 
    $('.more-form').click(function() {
        $('.extra').slideDown();
        $(this).css("display","none");
    })
});
$(document).ready(function() { 
    $('.close-pop').click(function() {
        $('.order-popup').slideUp();
        $('.pop-active').css("display","none");
        $('body').css("overflow","auto");
        $('.more-form').css("display","block");
        $('.extra').css("display","none");
        
    })
}); 
$(document).ready(function() { 
    $('.popup').click(function() {
        $('.order-popup').slideDown();
        $('.pop-active').css("display","block");        
        $('body').css("overflow","hidden");       
        
    })
}); 
$(document).ready(function() { 
    $('.pop-active').click(function() {
        $('.close-pop').click();
        
    })
}); 
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {

		event.preventDefault();

	
		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
	
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
$(document).ready(function() {
    
    $('.mobile .stat').click(function() {
        $('.mobile .stat').each(function(){
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    if($(this).hasClass("comfort")){
        $(".mobile .price span").html('400');
    }
        if($(this).hasClass("business")){
        $(".mobile .price span").html('500');
    }
        if($(this).hasClass("suv")){
        $(".mobile .price span").html('600');
    }
        
    })
   
}); 