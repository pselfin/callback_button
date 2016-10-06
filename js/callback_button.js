(function ($) {
	Drupal.behaviors.callback_button = {
		attach: function(context, settings) {
			//console.log(Drupal.settings.callback_button.bgcolor);
			var bgcolor  	= Drupal.settings.callback_button.bgcolor;
			var telcolor 	= Drupal.settings.callback_button.telcolor;
			var before_text = Drupal.settings.callback_button.beforetext;
			var after_text  = Drupal.settings.callback_button.aftertext;
			var wave_color  = Drupal.settings.callback_button.telwavecolor; 
			var wave        = $('#block-callback-button-callback-button .phone-call_wave__stroke');
			var button 		= $('#block-callback-button-callback-button');
			var button_tel 	= $('#block-callback-button-callback-button .callback-link-div');
			var button_form = $('#block-callback-button-callback-button-form');
			var form_color  = Drupal.settings.callback_button.bgformcolor;
			//console.log(form_color);
			
			button.css('background','#' + bgcolor);
			button_tel.css('color','#' + telcolor);
			wave.css('border-color','#' + wave_color);
			$('#block-callback-button-callback-button-form').css('background','#' + form_color);
			//button_form.css('background','#' + form_color);

			$('#block-callback-button-callback-button-form .webform-client-form').once(function(){
				$(this).prepend('<div class="before-form">' + before_text + '</div>');
				$(this).append('<div class="after-form">' + after_text + '</div>');
				button_form.prepend('<a href="#" class="close-btn-a"><div class="close-btn"></div></a>');
				button_form.addClass('hidden-form');
			

			button.hover(function(){
				var bg_hover_color  = Drupal.settings.callback_button.bghovercolor;
				var tel_hover_color = Drupal.settings.callback_button.telhovercolor;
					if(!$(this).hasClass('hover-btn')){
						$(this).css('background','#' + bg_hover_color);
						button_tel.css('color','#' + tel_hover_color);
						$(this).addClass('hover-btn');
					}
					else{
						$('#block-callback-button-callback-button').css('background','#' + bgcolor);
						button_tel.css('color','#' + telcolor);
						$(this).removeClass('hover-btn');
					}
			});

			button.click(function(e){
				if(button_form.hasClass('hidden-form')){
					button_form.removeClass('hidden-form');
					button_form.addClass('visible-form');

				}else{
					button_form.removeClass('visible-form');
					button_form.addClass('hidden-form');
				}
			});
			var button_close = $('#block-callback-button-callback-button-form .close-btn-a');
			button_close.click(function(){
				if(button_form.hasClass('hidden-form')){
					button_form.removeClass('hidden-form');
					button_form.addClass('visible-form');

				}else{
					button_form.removeClass('visible-form');
					button_form.addClass('hidden-form');
				}
			});

			});


		}
	};
})(jQuery);