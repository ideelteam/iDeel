function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function retrieveDataFromServer(url, operation){
		$('#profile').append("<p>123</p>");
	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			displayUserProfile('profile', returnValues);
			populateJobs('jobs', returnValues);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function displayUserProfile(elementId, data){
	var info = data[0].description;
	$("#" + elementId).append("<p>" + info + "</p>");
}

$(document).ready(function() {
	retrieveDataFromServer('/dashboard/jobs', 'jobs');
	$('.page-section').css('height', $(window).height());
	$( window ).resize(function() {
		if($('body.home').length){
			$('.page-section').css('height', $(window).height());
		}
	});
	/*$('.page-content .slider-content').each(function(){
		$(this).css('top', ($(window).height()/2) - ($(this).outerHeight(true)/2));		*/

	$('#login-box #login').click(function(){
		if($('#login-box #username').val().trim() != ""){
			setCookie('username', $('#login-box #username').val(), 1000);
			window.location.href = "clientView.html";
		}else{
			$('#login-box .error-msg').show(0);
		}
	});

	$('#get-password').click(function(){
		$('#login-box label').hide();
		$('#login-box .inputs').hide();
		$('#login-box .btn').hide();
		$('#login-box').append("Please check your email for a message to change your password! <br /><br />");
	});

	$('#register-btn').click(function(){
		if($('#username').val().trim() != "" && $('#password').val().trim() != "" && $('#email').val().trim() != ""){
			$('.forms').html("<li><i class='fa fa-check'><i> Your registration application was sent to PNACAC, An email will be sent to you when it is approaved.</li>");
			$('.error-msg').hide(0);
		}else{
			$('.error-msg').show(0);
		}
	});

	$('#contact-send').click(function(){
		if($('#email').val().trim() != "" && $('#message').val().trim() != ""){
			$('.forms').html("<li><i class='fa fa-check'><i> Your message was sent successfully!</li>");
			$('.error-msg').hide(0);
		}else{
			$('.error-msg').show(0);
		}
	});

	if(getCookie('username') != ''){
		$('.uppermenu ul li:nth-child(1)').html("Hello " + getCookie('username') + "!");
		$('.uppermenu ul li:nth-child(2)').html('<a href="#" id="signout"><i class="fa fa-sign-out" aria-hidden="true"></i> Sign Out</a>');
	}

	$('#signout').click(function(){
		setCookie('username', "", 1000);
		window.location.href = "index.html";
	});

	$('.search-submit').click(function(e){
		e.preventDefault();
		if($('.search input').val().trim() != ""){
			window.location.href = "https://www.google.com/#q=site:http:%2F%2Fcss1.seattleu.edu%2F~almohamm%2Fpnacac+" + encodeURIComponent($('.search input').val());
		}else{
			$('.search input').attr('placeholder', 'Enter a search term');
		}
	});

	///.slider > div
	$('.counselors').show(0);
	var currentContent = 'counselors';
	$('.slider-menu .menu li a').click(function(e){
		e.preventDefault();
		var contentname = $(this).attr('href').split("#")[1];
		if(contentname != currentContent){
			$('.slider-menu .menu li').removeClass('active');
			$(this).parent().addClass('active');
			$('.slider-content').fadeOut(100);
			$('.slider-img').fadeOut(100);
			$('.' + contentname).fadeIn(700);
			currentContent = contentname;
			$('.slider-menu-background').css('background-image', $('.slider-img.' + contentname).css('background-image'));
		}
	});

	$('a').click(function(e){
		if($('body.home').length){
			if($.attr(this, 'href') == "#"){
				e.preventDefault();
			}else if($.attr(this, 'href').startsWith('#')){
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top
				}, 500);
			}
		}else{
			if($.attr(this, 'href') == "#"){
				e.preventDefault();
			}else if($.attr(this, 'href').startsWith('#')){
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top - 130
				}, 500);
			}
		}
	});

	//var opennav = false;

   $(".navmenu-toggle").click(function() {
	   $('body').toggleClass('navopened');
	   $('.navbar').toggleClass('navopened');
   });

	var hash = window.location.hash;
	hash = hash.split("#");

	if(hash.length > 0 && hash[1]){
		$(document).scrollTop(0);
		if($('body.home').length){
			$('html, body').animate({
				scrollTop: $(window.location.hash).offset().top
			}, 500);
		}else{
			$('html, body').animate({
				scrollTop: $(window.location.hash).offset().top - 140
			}, 500);

			$('.expandable-list li#' + hash[1]).addClass('opened');
			$('.expandable-list li#' + hash[1]).find('.hidden-content').show(300);
			$('.expandable-list li#' + hash[1]).find('.more-btn').html('<i class="fa fa-caret-up" aria-hidden="true"></i>');
		}
	}

	$('.expandable-list li').click(function(e){
		if(e.target.nodeName != "A"){
			if(!$(this).hasClass('opened')){
				$(this).addClass('opened');
				$(this).find('.hidden-content').show(300);
				$(this).find('.more-btn').html('<i class="fa fa-caret-up" aria-hidden="true"></i>');
			}else{
				$(this).removeClass('opened');
				$(this).find('.hidden-content').hide(300);
				$(this).find('.more-btn').html('<i class="fa fa-caret-down" aria-hidden="true"></i>');
			}
		}
	});


	$(window).scroll(function(e) {
		/* header */
		if($(document).scrollTop() < 150){
			var a = $(document).scrollTop()/150;
			a = a * 0.4;
			$('header').css('box-shadow', '1px 1px 3px rgba(20, 20, 20, ' + a + ')');
			a = a + 0.3;
			$('.home header').css('box-shadow', '1px 1px 3px rgba(20, 20, 20, ' + a + ')');
		}else{
			$('header').css('box-shadow', '1px 1px 3px rgba(20, 20, 20, 0.4)');
			$('.home header').css('box-shadow', '1px 1px 3px rgba(20, 20, 20, 0.4)');
		}

		if($(document).scrollTop() < 400){
			var a = $(document).scrollTop()/400;
			a = a * 0.4;
			a = a + 0.6;
			$('.home header').css('background', 'rgba(255, 255, 255, '  + a + ')');
		}else{
			$('.home header').css('background', 'rgba(255, 255, 255, 1)');
		}

		/* fix sidemenu */
		//.page-content .sidemenu
		/*if($(window).scrollTop() + $(window).height() > $(document).height() - $('.page-content .sidemenu').outerHeight(true) + 100) {
			var a = $(window).height() - $(window).scrollTop() - $('.page-content .sidemenu').outerHeight(true) + 100;

			//$('.page-content .sidemenu').html(a);
			$('.page-content .sidemenu').css('top', a + 'px');
			$('.page-content .sidemenu').css('bottom', 'auto');
		}else{
			$('.page-content .sidemenu').css('top', '140px');
			$('.page-content .sidemenu').css('bottom', 'auto');
		}*/
	});
});
