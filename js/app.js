var app = angular.module("MyWebApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when("/", {
			title		: "About Me",
			templateUrl : "home.html",
			controller	: "MainController"
		})

		.when("/project", {
			title		: "Project List",
			templateUrl : "project.html",
			controller	: "ProjectController"
		})

		.when("/blog", {
			title		: "Blog",
			templateUrl : "blog.html",
			controller	: "BlogController"
		});
		/*
		.when('/', {
			templateUrl : '',
			controller	: ''
		});
		*/

		//$locationProvider.html5Mode(true);
});

var MyHelper = MyHelper || {};

MyHelper.helpers = {
	showBtn: function(selector) {
		$(selector).css("opacity", 1).removeAttr("disabled");
	},

	hideBtn: function(selector) {
		$(selector).css("opacity", 0).attr("disabled", "disabled");
	},

	goTo: function(offset) {
		$('html, body').animate({
			scrollTop: offset + "px"
		}, "fast");
	}
};