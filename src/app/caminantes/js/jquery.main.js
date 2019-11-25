// page init
jQuery(function(){
	"use strict";

	initIsoTop();
	initbackTop();
	initAnchors();
	initCounter();
	initAddClass();
	initGoogleMap();
	initSlickSlider();
	initVegasSlider();
    initTextRotator();
	initStickyHeader();
    initTextRotator2();
    initTextRotator3();
	initNavRemoveClass();
	initFormValidation();
	new WOW().init();
});

jQuery(window).on('load', function() {
	"use strict";

	initIsoTop();
	initPreLoader();
});


// PreLoader init
function initPreLoader() {
	jQuery('#pre-loader').delay(400).fadeOut();
}


// TextRotator init
function initTextRotator() {
    jQuery("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "zoomInDown",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
}

// TextRotator2 init
function initTextRotator2() {
    jQuery('#rotating2').textillate({
        selector: '.rotating-hold',

        // enable looping
        loop: true,

        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 2000,

        // sets the initial delay before starting the animation
        // (note that depending on the in effect you may need to manually apply
        // visibility: hidden to the element before running this plugin)
        initialDelay: 0,

        // set whether or not to automatically start animating
        autoStart: true,

        // custom set of 'in' effects. This effects whether or not the
        // character is shown/hidden before or after an animation
        inEffects: [],

        // custom set of 'out' effects
        // outEffects: [ 'fadeInUp' ],

        // in animation settings
        in: {
            // set the effect name
            effect: 'fadeInDown',

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 50,

            // set to true to animate all the characters at the same time
            sync: false,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false
        },
        out: {
            effect: 'fadeInUp',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false,
        },
        type: 'char'
    });
}

// TextRotator2 init
function initTextRotator3() {
    jQuery("#rotating3").typed({
        strings: ["the best agency", "the Simple agency", "the Doge agency", "the Cool agency"],
        loop: true,
        typeSpeed: 100
    });
}

function initVegasSlider() {
  jQuery("#bgvid").vegas({
      slides: [
        {   src: 'images/polina.jpg',
            video: {
                src: [
                    'video/polina.webm',
                    'video/polina.mp4'
                ],
                loop: true,
                timer: false,
                mute: true
            }
        }
    ]
  });
}


function initSlickSlider() {
	jQuery('.main-slider').slick({
		dots: true,
		speed: 800,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000
	});
    jQuery('.txtslider').slick({
        dots: true,
        speed: 800,
        fade: true,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 3000
    });
    jQuery('.slider-ani').slick({
        dots: true,
        speed: 100,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){jQuery(this).find('.slide').eq(currentSlide).find('.animated').addClass('flipInX').removeClass('hide2');}).on('beforeChange', function(event, slick, currentSlide, nextSlide){jQuery(this).find('.slide').eq(currentSlide).find('.animated').removeClass('flipInX').addClass('hide2');});
	jQuery('.process-slider').slick({
		dots: true,
		speed: 800,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000
	});
	jQuery('.event-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: false,
		autoplaySpeed: 1000
	});
}


function initAddClass() {
	jQuery('.nav-opener').on( "click", function(e){
		e.preventDefault();

		jQuery("body").toggleClass("nav-active");
	});
}


// NavRemoveClass init
function initNavRemoveClass() {
	jQuery("#nav .smooth").click(function(){
		if (jQuery("body").hasClass("nav-active")) {
			setTimeout(function() { 
			jQuery("body").removeClass("nav-active");}, 800);
		}
	});
	if ($(window).width() < 767) {
		jQuery(".navbar.navbar-default .smooth").click(function(){
			jQuery(".navbar-toggle").trigger('click');
		});
	}
}

// sticky header init
function initStickyHeader() {
	var win = jQuery(window),
		stickyClass = 'fixed-position';

	jQuery('#header').each(function() {
		var header = jQuery(this);
		var headerOffset = header.offset().top || 0;
		var flag = true;

		function scrollHandler() {
			if (win.scrollTop() > headerOffset) {
				if (flag){
					flag = false;
					header.addClass(stickyClass);
				}
			} else {
				if (!flag) {
					flag = true;
					header.removeClass(stickyClass);
				}
			}
		}

		scrollHandler();
		win.on('scroll resize orientationchange', scrollHandler);
	});
}


// Counter init
function initCounter() {
	jQuery('.counter').counterUp({
		delay: 10,
		time: 2000
	});
}


// IsoTop init
function initIsoTop() {
	// Isotope init
	var isotopeHolder = jQuery('#portfolio-holder'),
		win = jQuery(window);
	jQuery('.filter-list a').click(function(e){
		e.preventDefault();
		
		jQuery('.filter-list li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
		var selector = jQuery(this).attr('data-filter');
		isotopeHolder.isotope({ filter: selector });
	});
	jQuery('#portfolio-holder').isotope({
		itemSelector: '.col',
		transitionDuration: '0.6s',
		masonry: {
	    	columnWidth: '.col'
		}
	});
}


// initialize smooth anchor links
function initAnchors() {
	new SmoothScroll({
		anchorLinks: 'a.smooth[href^="#"]:not([href="#"])',
		extraOffset: 99,
		activeClasses: 'parent'
	});
}


// sticky backtop init
function initbackTop() {
	var jQuerybackToTop = jQuery("#back-top");
	jQuery(window).on('scroll', function() {
		if (jQuery(this).scrollTop() > 100) {
			jQuerybackToTop.addClass('active');
		} else {
			jQuerybackToTop.removeClass('active');
		}
	});
	jQuerybackToTop.on('click', function(e) {
		jQuery("html, body").animate({scrollTop: 0}, 500);
	});
}


// GoogleMap init
function initGoogleMap() {
	jQuery('.map-holder').googleMapAPI({
		marker: 'images/map-logo.png',
		mapInfoContent: '.map-info',
		streetViewControl: false,
		mapTypeControl: false,
		scrollwheel: false,
		panControl: false,
		zoomControl: false
	});
}



// form validation init
function initFormValidation() {
	//if form-submit button is clicked
	$('#form-submit').click(function () {

        //Get the data from all the fields
        var name = $('#contact-form input[name=name]');
        var email = $('#contact-form input[name=email]');
        var comment = $('#contact-form textarea[name=comment]');
        var returnError = false;

        //Simple validation to make sure user entered something
        //Add your own error checking here with JS, but also do some error checking with PHP.
        //If error found, add hightlight class to the text field
        if (name.val()=='') {
            name.addClass('error');
            returnError = true;
        } else name.removeClass('error');

        if (email.val()=='') {
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');

        if (comment.val()=='') {
            comment.addClass('error');
            returnError = true;
        } else comment.removeClass('error');

        // Highlight all error fields, then quit.
        if(returnError == true) {
            return false;	
        }

        //organize the data
        var data = 'name=' + name.val() + '&email=' + email.val() + '&comment='  + encodeURIComponent(comment.val());

        //disabled all the text fields
        $('#contact-form .form-control').attr('disabled','true');

        //show the loading sign
        $('.loading').show();

        //start the ajax
        $.ajax({
            //this is the php file that processes the data and sends email
            url: "inc/process.php",	

            //GET method is used
            type: "GET",

            //pass the data	
            data: data,	

            //Do not cache the page
            cache: false,

            //success
            success: function (html) {	
            //if process.php returned 1/true (send mail success)
                if (html==1) {	
                //hide the form
                $('#contact-form').fadeOut('slow');	

                //show the success message
                $('#contact-form+.done-massage').fadeIn('slow');

                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');	
            }	
        });

        //cancel the submit button default behaviours
        return false;
	});


	//if form-submit button is clicked
	$('#form-submit2').click(function () {

        //Get the data from all the fields
        var name = $('#contact-form input[name=name]');
        var email = $('#contact-form input[name=email]');
        var phone = $('#contact-form input[name=phone]');
        var comment = $('#contact-form textarea[name=comment]');
        var returnError = false;

        //Simple validation to make sure user entered something
        //Add your own error checking here with JS, but also do some error checking with PHP.
        //If error found, add hightlight class to the text field
        if (name.val()=='') {
            name.addClass('error');
            returnError = true;
        } else name.removeClass('error');

        if (email.val()=='') {
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');

        if (comment.val()=='') {
            comment.addClass('error');
            returnError = true;
        } else comment.removeClass('error');

        // Highlight all error fields, then quit.
        if(returnError == true) {
            return false;	
        }

        //organize the data
        var data = 'name=' + name.val() + '&email=' + email.val()  + '&phone=' + phone.val() + '&comment='  + encodeURIComponent(comment.val());

        //disabled all the text fields
        $('#contact-form .form-control').attr('disabled','true');

        //show the loading sign
        $('.loading').show();

        //start the ajax
        $.ajax({
            //this is the php file that processes the data and sends email
            url: "inc/process2.php",	

            //GET method is used
            type: "GET",

            //pass the data	
            data: data,	

            //Do not cache the page
            cache: false,

            //success
            success: function (html) {	
            //if process.php returned 1/true (send mail success)
                if (html==1) {	
                //hide the form
                $('#contact-form').fadeOut('slow');	

                //show the success message
                $('#contact-form+.done-massage').fadeIn('slow');

                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');	
            }	
        });

        //cancel the submit button default behaviours
        return false;
	});


	//if form-submit button is clicked
	$('#form-submit3').click(function () {

        //Get the data from all the fields
        var name = $('.signup-form input[name=name]');
        var email = $('.signup-form input[name=email]');
        var phone = $('.signup-form input[name=phone]');
        var returnError = false;

        //Simple validation to make sure user entered something
        //Add your own error checking here with JS, but also do some error checking with PHP.
        //If error found, add hightlight class to the text field
        if (name.val()=='') {
            name.addClass('error');
            returnError = true;
        } else name.removeClass('error');

        if (email.val()=='') {
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');

        if (phone.val()=='') {
            phone.addClass('error');
            returnError = true;
        } else phone.removeClass('error');

        // Highlight all error fields, then quit.
        if(returnError == true) {
            return false;	
        }

        //organize the data
        var data = 'name=' + name.val() + '&email=' + email.val()  + '&phone=' + phone.val();

        //disabled all the text fields
        $('.signup-form .form-control').attr('disabled','true');

        //show the loading sign
        $('.loading').show();

        //start the ajax
        $.ajax({
            //this is the php file that processes the data and sends email
            url: "inc/process4.php",	

            //GET method is used
            type: "GET",

            //pass the data	
            data: data,	

            //Do not cache the page
            cache: false,

            //success
            success: function (html) {	
            //if process.php returned 1/true (send mail success)
                if (html==1) {	
                //hide the form
                $('.signup-form').fadeOut('slow');	

                //show the success message
                $('.signup-form+.done-massage').fadeIn('slow');

                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');	
            }	
        });

        //cancel the submit button default behaviours
        return false;
	});


	//if form-submit button is clicked
	$('#form-submit4').click(function () {

        //Get the data from all the fields
        var name = $('.signup-form input[name=name]');
        var email = $('.signup-form input[name=email]');
        var returnError = false;

        //Simple validation to make sure user entered something
        //Add your own error checking here with JS, but also do some error checking with PHP.
        //If error found, add hightlight class to the text field
        if (name.val()=='') {
            name.addClass('error');
            returnError = true;
        } else name.removeClass('error');

        if (email.val()=='') {
            email.addClass('error');
            returnError = true;
        } else email.removeClass('error');

        // Highlight all error fields, then quit.
        if(returnError == true) {
            return false;	
        }

        //organize the data
        var data = 'name=' + name.val() + '&email=' + email.val();

        //disabled all the text fields
        $('.signup-form .form-control').attr('disabled','true');

        //show the loading sign
        $('.loading').show();

        //start the ajax
        $.ajax({
            //this is the php file that processes the data and sends email
            url: "inc/process3.php",	

            //GET method is used
            type: "GET",

            //pass the data	
            data: data,	

            //Do not cache the page
            cache: false,

            //success
            success: function (html) {	
            //if process.php returned 1/true (send mail success)
                if (html==1) {	
                //hide the form
                $('.signup-form').fadeOut('slow');	

                //show the success message
                $('.signup-form+.done-massage').fadeIn('slow');

                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');	
            }	
        });

        //cancel the submit button default behaviours
        return false;
	});
}