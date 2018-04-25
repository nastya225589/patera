
$(document).ready(function(){
	function accordion() {
	$(this).toggleClass('main-nav__list-par_activ');
	}
	$('.main-nav__toggle').on ('click', function() {
		$('.main-nav__list-par').toggleClass('main-nav__list-par_activ')
	});

  

	$("#headerMain").removeClass("default");
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 20) {
	    $("#headerMain").addClass("default").fadeIn('fast');
	  } else {
	    $("#headerMain").removeClass("default").fadeIn('fast');
	  };
	});


	$('.show_popup').click(function() {
	    var popup_id = $('#' + $(this).attr("rel"));
	    $(popup_id).show();
	    $('.overlay_popup').show();
	})
	$('.overlay_popup, .tables-push__close').click(function() {
	    $('.overlay_popup, .popup').hide();
	});

	$('.show_popup2').click(function() {
	    var popup_id = $('#' + $(this).attr("rel"));
	    $(popup_id).show();
	    $('.overlay_popup2').show();
	})
	$('.overlay_popup2, .lattice__push-close').click(function() {
	    $('.overlay_popup2, .popup2').hide();
	});


	$('.show_popup3').click(function() {
	    var popup_id = $('#' + $(this).attr("rel"));
	    $(popup_id).show();
	    $('.overlay_popup3').show();
	})
	$('.overlay_popup3, .btn__push-close').click(function() {
	    $('.overlay_popup3, .popup3').hide();
	});


// $(".callback").submit(function() {
// 	var th = $(this);
// 	$.ajax({
// 		type: "POST",
// 		url: "mail.php",
// 		data: th.serialize()
// 	}).done(function() {
// 		$(th).find(".bid-send").addClass("active").hide().fadeIn();
// 		setTimeout(function() {
// 			$(th).find(".bid-send").removeClass("active").fadeOut();
// 			th.trigger("reset");
// 		}, 3000);
// 	});
// 	return false;
// });
	

	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.bid-send').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});

	// $(function($){
	// $('[name="phone"]').mask("+7(999) 999-99-99");
});




 jQuery(document).ready(function($) {
	$('.tab_content').hide();
	$('.tab_content:first').show();
	$('.tabs li:first').addClass('active');

	$('.tabs li').click(function(event) {
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').hide();

		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});
});

function accordion() {
		$(this).toggleClass('main-nav__list-par_activ');
		$('.main-nav__list-par').not(this).removeClass('main-nav__list-par_activ');
	}
		$('.main-nav__item, .main-nav__toggle').on ('click', accordion)

	// function accordion() {
	// 	$(this).toggleClass('price__min-link--active');
	// 	$('.price__min-link--xs').not(this).removeClass('price__min-link--active');
	// }
	// 	$('.price__min-link--xs').on ('click', accordion)


	// $('.footer__header--up').click(function () { 
	// $('html, body').animate({ scrollTop: 0 }, 800); 
	// return false;
	// });

	// $('td').on('click', function () {
	// $(this).css(
	// 		'border' ' 2px''solid' '#960000'
	// 		);	
	// });
	// // $('.box').on('dblclick', function (){
	// // 	$(this).css('opacity', '0');	
	// // });



