var n = 1;
var v = 0;
var p = 0;
var audio = document.getElementById("player");
audio.volume = 0.5;
$(".next").click(function(){
  if(n>=2){
    n = 0;
  }
  n = n+1;
  $("#player").attr('src', n + ".mp3");
  if(n>2){
    n = 0;
  }
  audio.play();
})

$(".prev").click(function(){
  n = n - 1;
  if(n<=0){
    n = 2;
  }
  $("#player").attr('src', n + ".mp3");
  audio.play();
})


$(".pause").click(function(){
  if(p == 0){
    audio.pause();
    $("#bars").removeClass("anim");
  }
  else{
    audio.play();
    $("#bars").addClass("anim");
  }
  
  p = p+1;
  
  if(p>1){
    p=0;
  }
  
  
  
})

$(".vol").click(function(){
  if(v == 0){
    audio.volume = 0;
    $(".vol img").attr('src', "img/speaker-none.png");
  }
  else{
    audio.volume = 0.5;
    $(".vol img").attr('src', "img/speaker.png");
  }
  
  v = v+1;
  
  if(v>1){
    v=0;
  }
  
})

$(".main").onepage_scroll({
   sectionContainer: "section",    
   easing: "ease",                  
   animationTime: 1500,           
   pagination: false,             
   updateURL: false,   
   beforeMove: function(index) {
     if ($('.section1').hasClass('active')) {
      $(".slick-dots li").removeClass("actv");
        $(".s1").addClass("actv");
       }
     
     if ($('.section2').hasClass('active')) {
      $(".slick-dots li").removeClass("actv");
        $(".s2").addClass("actv");
       
       
       if ($(window).width()  > 900) {
       $('.section2 .left').addClass(" fadeInLeft");
       $('.section2 .right').addClass("fadeInRight");
       }
       }
     
     if ($('.section3').hasClass('active')) {
      $(".slick-dots li").removeClass("actv");
        $(".s3").addClass("actv");
       if ($(window).width()  > 900) {
       $('.section3 .left').addClass("fadeInLeft");
       $('.section3 .right').addClass("fadeInRight");
       $('.section3 .center').addClass("fadeInUp");
       }
       }
     
     if ($('.section4').hasClass('active')) {
      $(".slick-dots li").removeClass("actv");
        $(".s4").addClass("actv");
       if ($(window).width()  > 900) {
        $('.section4 .left').addClass("fadeInLeft");
        $('.section4 .top').addClass("fadeInDown");
        $('.section4 .bottom').addClass("fadeInUp");
        $('.section4 .right').addClass("fadeInRight");
       }
       }

     if ($('.section5').hasClass('active')) {
      $(".slick-dots li").removeClass("actv");
        $(".s5").addClass("actv");
       if ($(window).width()  > 900) {
        $('.section5 .left').addClass("fadeInLeft");
        $('.section5 .top').addClass("fadeInDown");
        $('.section5 .bottom').addClass("fadeInUp");
        $('.section5 .right').addClass("fadeInRight");
       }
       }
     
     if ($('.section6').hasClass('active')) {
      $(".slick-dots li").removeClass("actv");
        $(".s6").addClass("actv");
       if ($(window).width()  > 900) {
        $('.section6 .left').addClass("fadeInLeft");
        $('.section6 .right').addClass("fadeInRight");
       }
       }
   }, 
   afterMove: function(index) {
     if($(".slick-dots").hasClass("open")){
       $(".slick-dots").removeClass("open");
       $("#m-mob").show();
     }
     
     
   },
   loop: false,       
   keyboard: false,           
   responsiveFallback: false,   
   direction: "vertical"     
});


$(".s1").click(function(){
  $(".main").moveTo(1);
});

$(".s2").click(function(){
  $(".main").moveTo(2);
});

$(".s3").click(function(){
  $(".main").moveTo(3);
});

$(".s4").click(function(){
  $(".main").moveTo(4);
});


$(".s5").click(function(){
  $(".main").moveTo(5);
});



$(".s6").click(function(){
  $(".main").moveTo(6);
});



$(".f1").click(function(){
  $(".main").moveTo(1);
});


$(".f2").click(function(){
  $(".main").moveTo(2);
});


$(".f3").click(function(){
  $(".main").moveTo(3);
});


$(".f4").click(function(){
  $(".main").moveTo(4);
});


$(".f5").click(function(){
  $(".main").moveTo(5);
});


$(".f6").click(function(){
  $(".main").moveTo(6);
});



$("#m-mob").click(function(){
  if($(".slick-dots").hasClass("open")){
    $(this).show();
  }
  else{
    $(".slick-dots").addClass("open");
    $(this).hide();
  }
})

if ($(window).width()  > 900) {
  document.write('<script src="js/parallaxsoon.js"><\/script>');

}

 $('.js-contentToggle').contentToggle();


$("#op-ac1").click(function(){
  $(".accordion").hide();
  $("#ac1").show();
  $(".tabs li").removeClass("active");
  $(this).addClass("active");
});

$("#op-ac2").click(function(){
  $(".accordion").hide();
  $("#ac2").show();
  $(".tabs li").removeClass("active");
  $(this).addClass("active");
});

$("#op-ac3").click(function(){
  $(".accordion").hide();
  $("#ac3").show();
  $(".tabs li").removeClass("active");
  $(this).addClass("active");
});

$("#op-ac4").click(function(){
  $(".accordion").hide();
  $("#ac4").show();
  $(".tabs li").removeClass("active");
  $(this).addClass("active");
});


