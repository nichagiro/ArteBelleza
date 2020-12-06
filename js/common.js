// FORM
var form = document.getElementById('contactform');
form.addEventListener('submit', function(e){

	e.preventDefault();

	let success = document.getElementById('alert-box success');
	success.style.display = 'block';

	form.style.display = 'none';
})


// Page Loader
setTimeout(function(){
	$('body').addClass('loaded')
}, 1000);





// Menu
$(window).on("resize", function () {
	var positionTop = window.innerHeight / 2;
	$('nav ul').css('top', positionTop);
	var marginTop = $('nav ul').height() / 2;
	$('nav ul').css('margin-top', -marginTop);
}).resize();