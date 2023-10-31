jQuery(window).on('load', function() {      
    setTimeout(function(){
        $(".hero .animation-container").each(function(){
            var e = $(this);
            setTimeout(function(){
                e.addClass("run-animation");
            }, e.data("animation-delay") );
        });
    }, 900 );
});

jQuery(document).ready(function($) {
	"use strict";
 $(window).on('load', function() {        
    setTimeout(function(){
            $(".hero .animation-container").each(function(){
                var e = $(this);
                setTimeout(function(){
                     e.addClass("run-animation");
                    }, e.data("animation-delay") );
            });
        }, 900 );
    });
    
});