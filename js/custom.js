$(function() {
	burgerMenu();
});

 function burgerMenu(){
 	var menu= $ ("#js-menu");

 	menu.find(".btn_mnu").on("click", function(){
 		menu.toggleClass("active");
 	});
 }