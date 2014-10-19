$(function() {

	$("button").hover(function() {
		$(this).removeClass("btn-default").addClass("btn-inverse");
		//$(this).children("span").css("display", "inline-block").delay(5000);
		$(this).children("span").delay(250).show(0);
		//console.log($(this).children("span"));
	}, function() {
		$(this).removeClass("btn-inverse").addClass("btn-default");
		$(this).children("span").hide(0);
	});

});