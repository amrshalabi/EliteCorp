/*jslint browser:true*/
/*global $, document, window*/
$(document).ready(function () {
    
    'use strict';
    var winH   = $(window).height(),
        upperH = $(".upper-nav").innerHeight(),
        navH   = $(".navbar").innerHeight();
    $(".slider , .carousel-item").height(winH - (upperH + navH));
    
    $(".featured-work ul li").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
    
        if ($(this).data("class") === "all") {
        
            $(".shuffel-images .row .col-md").css("opacity", "1");
        } else {
        
            $(".shuffel-images .row .col-md").css("opacity", ".3");
        
            $($(this).data("class")).parent().css("opacity", "1");
        
        }
    });
    
});