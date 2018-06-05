angular.module('app').controller('tabController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
    	index:0,
    	items:[{title:'待审批',width:80,badge:6},{title:'已审批'},{title:'已审批'}]
    };
    
    $scope.vc = {
        
    };

    $scope.ready = function(){
        
    }();
}]);