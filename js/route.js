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

    $translateProvider.translations('en', {
        HOME: 'Home',
        OUR_MISSION: 'Our mission',
        BEING_SPECIAL: 'Being Specila',
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
