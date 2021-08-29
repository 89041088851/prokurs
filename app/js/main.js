$(function(){

});

$(".wrapper .tab").on("click", function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");