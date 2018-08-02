var app = angular.module('myApp', ['ngRoute', 'pascalprecht.translate'])
app.config(function($routeProvider, $locationProvider, $translateProvider){
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $routeProvider
    .when("/", {
        templateUrl : "html/home.html"
    })
    .when("/main", {
        templateUrl : "html/main.html"
    })
    .when("/menu", {
        templateUrl : "html/menu.html"
    })
    .when("/about", {
        templateUrl : "html/about.html"
    })
    .when("/book_a_session", {
        templateUrl : "html/book_a_session.html"
    })

    $translateProvider.translations('en', {
        HOME: 'Home',
        OUR_MISSION: 'Our mission',
        BEING_SPECIAL: 'Being Special',
        PSYCHOTHERAPY: "Psychotherapy",
        ABOUT_ME: 'About me',
        BOOK_A_SESSION: "Book a Session"
    })
    .translations('cht', {
        HOME: '首頁',
        OUR_MISSION: '我的任務',
        BEING_SPECIAL: '變得特別',
        PSYCHOTHERAPY: "心理療法",
        ABOUT_ME: '關於我',
        BOOK_A_SESSION: "想見你"
    })
    .translations('chs', {
        HOME: '首页',
        OUR_MISSION: '我的任务',
        BEING_SPECIAL: '变得特别',
        PSYCHOTHERAPY: "心理療法",
        ABOUT_ME: '關於我',
        BOOK_A_SESSION: "想見你"
    })
    .translations('jp', {
        HOME: 'ホームページ',
        OUR_MISSION: 'ミッション',
        BEING_SPECIAL: 'スペシャル',
        PSYCHOTHERAPY: "わからない",
        ABOUT_ME: '私について',
        BOOK_A_SESSION: "君に会いたい"
    });

    $translateProvider.preferredLanguage('en');
})

app.controller('TranslateController', function($translate, $scope) {
    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
    }
});

app.controller('HomePage', function($scope,$anchorScroll) {

	function elmYPosition(eID) {
		var elm = document.getElementById(eID);

		var y = elm.offsetTop;
		var node = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
			node = node.offsetParent;
			y += node.offsetTop;
		} return y;
	}

	function currentYPosition() {
		if (self.pageYOffset) {
			return self.pageYOffset;
		}

		return 0;
	}

	function scrollTo(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 16) speed = 16;
        var step = Math.round(distance / 100);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
	}

	$scope.goToID = function (id) {
		scrollTo("" + id);
	}
});