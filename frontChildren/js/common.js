$(document).ready(function(){
$('.cklick-login').click(function(){
	$('.section-form').slideDown(800);
	$('.overlay-index').css('background','rgba(23,0,0,0.9)');
});
$('.close').click(function(){
	$('.section-form').fadeOut(1000);
	$('.overlay-index').css('background','rgba(0,0,0,0.5)');
})
});