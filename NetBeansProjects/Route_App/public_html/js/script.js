'use strict';

/*Déclaration de l'application routeApp*/
var routeApp = angular.module('routeApp', [
    'ngRoute',
    'routeAppControllers'
]);

/*Configuration du module principal:routeApp*/
routeApp.config(['$routeProvider', 
    function($routeProvider) {
        //systeme de routage
        $routeProvider
        .when('/home', {
            templateUrl: 'html/home.html',
            controller: 'homeCtrl'
        })
        .when('/contact/:msg?', {
            templateUrl: 'html/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);

/*définition des controleurs*/
var routeAppControllers = angular.module('routeAppControllers', []);

/*controleur page accueil*/
routeAppControllers.controller('homeCtrl', ['$scope',
    function($scope) {
        $scope.message = "Bienvenue";
    }
]);

/*controleur contact*/
routeAppControllers.controller('contactCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams){
        $scope.message = "Laissez un message";
        $scope.msg = $routeParams.msg || "Merci à bientôt";
    }
]);
