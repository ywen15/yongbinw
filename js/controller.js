app.controller("MainController", function($rootScope, $scope, $http, $location) {

	$rootScope.title = "About Me";

	/* Menu Elements */
	$scope.menu = [{
		name: "Home",
		link: "",
		icon: "fa-home"
	}, {
		name: "Project",
		link: "project",
		icon: "fa-file-text-o"
	}, {
		name: "Blog",
		link: "blog",
		icon: "fa-pencil"
	}, {
		name: "Github",
		link: "github",
		icon: "fa-github"
	}, {
		name: "LinkedIn",
		link: "linkedin",
		icon: "fa-linkedin"
	}, {
		name: "Email",
		link: "email",
		icon: "fa-envelope-o"
	}];

	/* Work Experience Elements */
	$scope.exp = [{
		company: "Mercatus Technologies Inc.",
		info: "Toronto, Ontario - Software Developer, Apr. 2014 to Aug. 2014",
		description: [
			"Wrote javascript test cases for front-end application using Jasmine.",
			"Designed and implemented new features and components for web applications.",
			"Took the initiative in redeveloping application with different technology stack."
		]
	}, {
		company: "Rogers Digital Media Inc.",
		info: "Toronto, Ontario - Web Developer, Sept. 2013 to Dec. 2013",
		description: [
			"Cooperated with UI/UX team to build a custom Adobe DPS storefront for iOS devices.",
			"Wrote a PHP parser which turns Wordpress content into a JSON object.",
			"Performed a presentation about MBaaS for determining the optimal service provider for the company."
		]
	}, {
		company: "Verto Inc.",
		info: "Toronto, Ontario - MVC Software Developer, Jan. 2013 to Apr. 2013",
		description: [
			"Developed and maintained websites in PHP, Ruby on Rails, javascript, HTML5, CSS3.",
			"Worked with a team of developers to design data models for web application purposes.",
			"Engaged in direct correspondence with clients involving support and implementation of requested features."
		]
	}, {
		company: "AudienceView Ticketing",
		info: "Toronto, Ontario - Software Developer, Apr. 2012 to Aug. 2012",
		description: [
			"Debugged both front and back-end programs in ASP.NET, javascript, and C++.",
			"Implemented an application feature in Perl to load .DLL info on startup.",
			"Collaborate effectively with other developers as part of a cross-functional Agile team."
		]
	}, {
		company: "Interactive Computer Solutions Inc.",
		info: "Vaughan, Ontario - Programmer, May 2011 to Aug. 2011",
		description: [
			"Developed applications such as inventory management, and error reporting program.",
			"Performed validation of completed sites, including the debugging and testing of code.",
			"Personally corresponded with clients to determine client needs for company sites."
		]
	}];

	$scope.skilla = [{
		name: "Language",
		skill: ["PHP", "Ruby", "SQL", "javascript", "HTML", "CSS", "C", "C++" ]
	}, {
		name: "Knowledge",
		skill: [ "Twitter API", "FTP", "LAMP", "Bash" ]
	}, {
		name: "Framework",
		skill: [ "Wordpress", "Rails", "jQuery", "Backbone.js", "AngularJS", "Bootstrap" ]
	}];
	$scope.skillb = [{
		name: "OS",
		skill: [ "Ubuntu 10,12,13,14", "CentOS 5", "Mac OSX", "Windows 95,98,2000,XP,7,10" ]
	}, {
		name: "Development Tool",
		skill: [ "Version Control (Git, Subversion, Mercurial)", "xampp", "MAMP", "Vim", "Sublime Text", "Adobe CS (PS, DW, FW)", "FileZilla", "Visual Studio" ]
	}, {
		name: "Natural Language",
		skill: [ "English", "Japanese", "Chinese", "Korean" ]
	}];

	$scope.href = function(url) {
		switch(url) {
			case "linkedin": 
				window.open("http://ca.linkedin.com/pub/yongbin-wen/a4/aa0/360/", "_blank");
				break;
			case "github": 
				window.open("http://github.com/ywen15", "_blank");
				break;
			case "email":
				window.open("mailto:wen.yb15@gmail.com", "_self");
				break;
			default:
				$location.path(url);
		}
		//console.log($location.path());
	}

	$scope.selected = function(url) {
		//console.log($location.path() + ' ' + url);
		if($location.path().substring(1) == url) {
			return "selected";
		}
		else {
			return "";
		}
	}

	var d = new Date();
	$scope.year = d.getFullYear();

	$scope.position = 0;
	$scope.section = ["intro", "skill", "exp"];

	$scope.scroll = function(direction) {
		
		$scope.position = (direction == "up") ? $scope.position - 1 : $scope.position + 1;
		if($scope.position <= 0) {
			$("#scroll").find("#scroll-up").fadeTo("slow", 0).attr('disabled','disabled');

			$scope.position = 0;
		}
		else if($scope.position >= $scope.section.length-1) {
			$("#scroll").find("#scroll-down").fadeTo("slow", 0).attr('disabled','disabled');
			$scope.position = $scope.section.length - 1;
		}
		else {
			$("#scroll").find("button").fadeTo("slow", 1).removeAttr('disabled');
		}

		var offset = ($scope.position == 0) ? 0 : $("#"+$scope.section[$scope.position]).offset().top;
		$('html, body').animate({
			scrollTop: offset + "px"
		}, "slow");
	}

});

app.controller("ProjectController", function($rootScope, $scope, $http) {
	$rootScope.title = "Project List";
	$scope.msg = "Show This Message";
});

app.controller("BlogController", function($rootScope, $scope, $http) {
	$rootScope.title = "Blog";
});