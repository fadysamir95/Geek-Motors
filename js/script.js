$(document).ready(function(){
	var sc = $("#scroll");
	$(window).scroll(function(){
		if($(this).scrollTop() >= 500){
			sc.show(300);
		}
		else{
			sc.hide(300);
        }
		if($(this).scrollTop() >= 700){
			$("nav").css("background-color","#3f778a");
		}
		else{
			$("nav").css("background-color","rgba(10,0,0,0.1");
		}
	});
	sc.click(function(){
		$("html,body").animate({
			scrollTop : 0
		},1000);
    });
    $(window).on("load",function(){
        $("#loading").fadeOut(2000);
		$("#loading").remove;
		$("#loading-back").fadeOut(3000);
        $("#loading-back").remove;
     });
     $("#nav-color-font1").click(function() {
        $('html, body').animate({
            scrollTop: $("html").offset().top
        }, 1000);
    });
     $("#nav-color-font2").click(function() {
        $('html, body').animate({
            scrollTop: $("#servicesView").offset().top
        }, 1000);
    });
    $("#nav-color-font3").click(function() {
        $('html, body').animate({
            scrollTop: $("#galleryView").offset().top
        }, 1000);
    });
    $("#nav-color-font4").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactUs").offset().top
        }, 1000);
    });
	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 100
            })
        })
    });
});