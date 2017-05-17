angular.module('app').controller('customerController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        types:{
            pre:0,
            old:1,
            net:2
        },
        customerList:[],
        oldCustomerList:[],
        netCustomerList:[]
    };
    console.log(utils.$stateParams.type);
    $scope.vo.type = utils.$stateParams.type || 'pre';
    $scope.vo.index = $scope.vo.types[$scope.vo.type];

    $scope.vc = {
        switchType:function(type){
            $scope.vo.index = $scope.vo.types[type];
            utils.$ionicHistory.nextViewOptions({disableAnimate:true});
            utils.$timeout(function(){
                utils.$state.go('customerList.tab',{type:type});
            },250);
        }
    };

    $scope.ready = function(){
        return arguments.callee;
    }();
}]);