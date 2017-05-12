angular.module('app').controller('demoController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        test:'testttttt'
    };
    $scope.vc = {
        go:function(state,type){
            type = type||'forward';
            utils.$ionicViewSwitcher.nextDirection(type);
            $scope.popover.hide();
            utils.$state.go(state);
        },
        showDemos:function($event){
            utils.$ionicPopover.fromTemplateUrl('demo-popover.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
                $scope.popover.show($event);
            });
        }
    };
}]);