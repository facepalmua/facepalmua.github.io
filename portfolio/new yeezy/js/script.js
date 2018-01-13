$(".div-2 .point1").click(function(){
  labelID = $(".label2").attr('for');
       $('#'+labelID).trigger('click');
})

$(".div-2 .point2").click(function(){
  labelID = $(".label1").attr('for');
       $('#'+labelID).trigger('click');
})

$(".div-2 .point3").click(function(){
  labelID = $(".label3").attr('for');
       $('#'+labelID).trigger('click');
})

$(".d1b").click(function(){
  $(".d1").show();
  $(".d2").hide();
  $(".d3").hide();
})

$(".d2b").click(function(){
  $(".d2").show();
  $(".d1").hide();
  $(".d3").hide();
})

$(".d3b").click(function(){
  $(".d3").show();
  $(".d2").hide();
  $(".d1").hide();
})

 
$(document).ready(function(){
	$(".nav").on("click","a[href^='#i']", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top-50;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
});


