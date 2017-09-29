/* Kjio JS - 0.0.1
Author: Elliot COLLIN <elliot.cln@gmail.com>
---------------------- */

/* Navbar toggle on mobile viewport
------------------------------------ */
document.querySelector('.toggleNav').onclick = function(e){
	e.preventDefault();
	document.querySelector('#main-navbar .nav-navbar').classList.toggle('active');
}

/* Anchor links
--------------- */
var anchors = document.querySelectorAll('a[href*="#"]');
for (var i in anchors ) {
	anchors[i].onclick = function(e) {
		e.preventDefault();
		target = this.getAttribute('href');
		document.querySelector(target).scrollIntoView({
		  behavior: 'smooth'
		});
	}
}

/* Modals
--------------- */
var btnModal = document.querySelectorAll('[data-action="modal"]');
for( var i = 0 in btnModal ){
	btnModal[i].onclick = function(e) {
		e.preventDefault();
		var target = this.getAttribute('data-target');
		document.getElementById(target).classList.add('active');
		console.log(target);
	}
}
var closeModal = document.querySelectorAll(".modal .modal-bg, .modal .close");
for( var i = 0 in closeModal ){
	closeModal[i].onclick = function() {
		this.closest('.modal').classList.remove('active');
	}
}

/* alerts
------------- */
var alert = document.querySelectorAll('.alert .close');
for( var i = 0 in alert) {
	alert[i].onclick = function() {
		this.closest('.alert').remove();
	}
}
