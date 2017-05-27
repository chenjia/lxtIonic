angular.module('app').controller('liveController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        ip:'http://172.21.145.1:5080/live/test.m3u8'
    };

    $scope.vc = {
        go:function(path){
            location.href=path+'?vHLSurl='+$scope.vo.ip;
        }
    };

    // $scope.$watch('vo.ip',function(value){
    //     window.vHLSurl = value;
    // });

    // window.getIp = function(){
    //     return window.vHLSurl;
    // }
}]);