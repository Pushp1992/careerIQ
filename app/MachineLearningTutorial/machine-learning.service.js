(function(){
    'use strict';

    angular.module('myApp.machineLearning')
    
    //creating service for fetching json file
    .service('PostService', PostService);   

    PostService.$inject = ['$resource'];    

    function PostService($resource){
        return $resource('app/scripts/course1.json'); 
    }
  
})();