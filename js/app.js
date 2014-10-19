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
