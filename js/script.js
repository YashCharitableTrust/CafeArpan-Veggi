
jQuery(document).ready(function() {
	
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	
	  
	  
	

//<!-- =============================================== -->
//<!-- ========== scrollTop.js ========== -->
//<!-- =============================================== -->
    
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 2000);
return false;
});




//<!-- =============================================== -->
//<!-- ========== scrollTop.js ========== -->
//<!-- =============================================== -->
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
			
//<!-- =============================================== -->
//<!-- ========== bootstrap scrollspy ========== -->
//<!-- =============================================== -->
    
    
    $('body').scrollspy({
    	target: '.navbar',
    	offset: 160
    });

//<!-- =============================================== -->
//<!-- ========== navbardown.js ========== -->
//<!-- =============================================== -->

$('.nav a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 80
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});			
			
			

 new WOW().init();


		
		
//Switching menu tabs
    $('.menus_top_menu a').click(function(){
        var closestLi = $(this).closest('li');
        //Do nothing if the currently active tab has been clicked
        if(closestLi.hasClass('active'))
        {
            return false;
        }
        //Otherwise, show and hide appropriate menu divs
        else
        {
            //Remove and add 'active' from appropriate li's
            $('.menus_top_menu li').removeClass('active');
            closestLi.addClass('active');

            //Hide all menu divs
            $('.menuDivs').hide();

            //Show the appropriate menu div
            var menuToShowId = '#' + $(this).attr('data-menuId');
            $(menuToShowId).show();
            $(menuToShowId).find('.wow').scroll(); //Need to trigger scrolling to get this div to show
            //Prevent event propagation
            return false;
        }
    });
});






		
  
 


	