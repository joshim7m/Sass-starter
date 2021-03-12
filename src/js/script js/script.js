
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 86){
		  $("#middle-navbar").addClass("shrink");
		}
		else
		{
			$("#middle-navbar").removeClass("shrink");
		}
	});


	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})