(function(){
    'use strict';

    angular
    .module('myApp.machineLearning')

    .controller('MachineLearningController', MachineLearningController);

    MachineLearningController.$inject = ['$scope', '$state', '$http', 'PostService', '$q'];

    function MachineLearningController($scope, $state, $http, PostService, $q) {

        var vm = this;

        /*fetching json file using restAPI*/
        PostService.get(function(data){
            $scope.course1 = data;
        });      


        /*using http.get() to fetch json file*/

         //fetching course details from course 2
        $http.get('app/scripts/course2.json') //reading course1.json file
        .success(function(data){
            $scope.course2 = data; //binding data to scope variable
        })
        .error(function(data, status){
            console.log("failure in loading data", status, data);
            $scope.course2 = {}; //return empty record on error
        });

         //fetching course details from course 3
         $http.get('app/scripts/course3.json') 
         .success(function(data){
             $scope.course3 = data;
         })
         .error(function(data, status){
             console.log("failure in loading data", status, data);
             $scope.course3 = {}; 
         });     

    }
})();