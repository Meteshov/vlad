$(document).on('click','.register-open',function(){
	$('.login-form').hide();
	$('.register-form').show();
	return false;
});
$(document).on('click','.forget-open',function(){
	$('.login-form').hide();
	$('.forget-pwd').show();
	return false;
});
$(document).on('click','.cancel',function(){
	$('form').hide();
	$('.login-form').show();
	return false;
});