(function(){
    'use strict';

    angular.module('myApp', [

        //adding ui-router as a dependency to main module
        'ui.router',

        //adding bootstrap depenedency to main module
        'ui.bootstrap',

        //adding angular-resource module
        'ngResource',

        //adding machine-learning module to main module
        'myApp.machineLearning'

    ])

    .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/machineLearning/course1');

    }
})();