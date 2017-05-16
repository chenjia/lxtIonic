angular.module('app').controller('homeController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        slides:[{
            lbpicNum:1,
            lbpicUrl:'images/home/banner1.jpg'
        },{
            lbpicNum:2,
            lbpicUrl:'images/home/banner2.jpg'
        },{
            lbpicNum:3,
            lbpicUrl:'images/home/banner3.jpg'
        }]
    };

    $scope.vc = {
        slideBox:function(){
            utils.http(Service.slideBox).success(function(response){
                $scope.vo.slides = response.data.packageList.packages.response.lbpiclist.lbpic;
            });
        }
    }

    $scope.ready = function(){
        // $scope.vc.slideBox();
    }();
}]);