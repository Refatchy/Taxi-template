$(function(){
    'use strict';
    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top >= 50){
            $('nav').addClass('nav-back');
        }
        else{
            $('nav').removeClass('nav-back');
        }
    });
});