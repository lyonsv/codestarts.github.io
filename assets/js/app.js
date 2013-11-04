
$(document).ready(function() {

  function slider(){
	  //more then or equals top
	  if($(window).scrollTop() >= 5 )
	  {
	    $('.slide-on-load').slideDown();
	  } 
	  else 
	  {
	  	$('.slide-on-load').slideUp();
	  }

	} //slide()
	window.setInterval(slider, 100);

	var $root = $('html, body');
	$('a').click(function() {
	    var href = $(this).attr('href');
	    $root.animate({
	        scrollTop: $(href+"").offset().top
	    }, 500, function () {
	        window.location.hash = href;
	    });
	    return false;
	});

});

//this handles sliders for signup flows.

$(document).ready(function(){
  $("#form1 form").submit(function() {
    $("#form1").slideUp();
    $("#upsell").slideDown();
    //alert($("#upsell").scrollTop());
    $("html, body").animate({ scrollBottom: 0 }, "slow");
    return false;
  });

  $("#upsell form").submit(function() {
    $("#upsell").slideUp();
    $("html, body").animate({ scrollBottom: 0 }, "slow");
    return false;
  });

  $("#guaranteebox").click(function(){
    alert("User is asked to pay 38p via some external process eg. PayPal.");
    $("#upsell").slideUp();
    $("#share").slideDown();
    $("html, body").animate({ scrollTop: $(window).height() }, "slow");
    return false;  
  });

  $("#skiptoshare").click(function(){
    $("#upsell").slideUp();
    $("#share").slideDown();
    $("html, body").animate({ scrollTop: $(window).height() }, "slow");
    return false;  
  });

  $("#share").hide();
  $("#upsell").hide();
}); 

