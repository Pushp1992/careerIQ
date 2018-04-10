(function(){
    'use strict';

    angular
    .module('myApp.machineLearning')

    .config(MLtutorialConfig);

    MLtutorialConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MLtutorialConfig($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider
        // .otherwise('/machineLearning');

        //ui-router parent state
        $stateProvider.state('MLtutorial', 
        {
            url: '/machineLearning',
            templateUrl: 'app/MachineLearningTutorial/machine-learning.tpl.html',
            controller: 'MachineLearningController',
            controllerAs: 'MachineLearningCtrl'
        })
        // child state 1
        .state('MLtutorial.course1',
        {
            url: '/course1',
            templateUrl: 'app/MachineLearningTutorial/courses/course1.tpl.html'

        })
        // child state 2
        .state('MLtutorial.course2',
        {
            url: '/course2',
            templateUrl: 'app/MachineLearningTutorial/courses/course2.tpl.html'

        })
        //child state 3
        .state('MLtutorial.course3',
        {
            url: '/course3',
            templateUrl: 'app/MachineLearningTutorial/courses/course3.tpl.html'

        });

    }
})();