angular.module('app').controller('loadingController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        percent:0
    };

    $scope.vc = {
        percentTimer:function(){
            $scope.vo.percent = 0;
            var timer = utils.$interval(function(){
                $scope.vo.percent += parseInt(Math.random()*3,10);
                if($scope.vo.percent>=100){
                    $scope.vo.percent = 100;
                    utils.$interval.cancel(timer);
                    utils.$timeout(function(){
                        utils.$ionicLoading.hide();
                        
                    },3000);
                }
            },100);
        },
        showProgress:function(){
            utils.$ionicLoading.show({
                scope:$scope,
                templateUrl:'progress.html'
            }).then(function(){
                $scope.vc.percentTimer();
            });
        }
    };

    $scope.ready = function(){
        utils.$timeout(function(){
            $scope.vo.showLoading = true;
        },1000);
        return arguments.callee;
    }();
}]);