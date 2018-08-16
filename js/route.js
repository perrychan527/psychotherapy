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
    .when("/services", {
        templateUrl : "html/services.html"
    })
    .when("/book_a_session", {
        templateUrl : "html/book_a_session.html"
    })

    $translateProvider.translations('en', {
        HOME: 'Home',
        ABOUT: 'About',
        SERVICES: 'Services',
        BEING_SPECIAL: 'Being Special',
        PSYCHOTHERAPY: "Psychotherapy",
        BOOK_A_SESSION: "Book a Session"
    })
    .translations('cht', {
        HOME: '首頁',
        ABOUT: '關於我',
        SERVICES: '服務',
        BEING_SPECIAL: '變得特別',
        PSYCHOTHERAPY: "心理療法",

        BOOK_A_SESSION: "想見你"
    })
    .translations('chs', {
        HOME: '首页',
        ABOUT: '關於我',
        SERVICES: '服務(簡體)',
        BEING_SPECIAL: '变得特别',
        PSYCHOTHERAPY: "心理療法",
        BOOK_A_SESSION: "想見你"
    })
    .translations('jp', {
        HOME: 'ホームページ',
        ABOUT: '私について',
        SERVICES: '服務(日文)',
        BEING_SPECIAL: 'スペシャル',
        PSYCHOTHERAPY: "わからない",
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