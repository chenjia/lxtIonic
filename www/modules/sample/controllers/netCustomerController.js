angular.module('app').controller('netCustomerController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        hasMore:true,
        customerList:[]
    };

    $scope.vc = {
        queryPreCustomer:function(){
            $scope.vo.loading = true;
            $scope.vo.customerList = [];
            utils.http(Service.queryCustomer).success(function(response){
                $scope.vo.hasMore = true;
                $scope.vo.customerList = response.modelModel.dataJson;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        },
        doRefresh:function(){
            utils.$timeout(function(){
                $scope.$broadcast('scroll.refreshComplete');
            },3000);
        },
        loadMore:function(){
            console.log('loadMore'+$scope.vo.type);
            $scope.vo.loading = true;
            utils.http(Service.queryCustomer).success(function(response){
                $scope.vo.loading = false;
                $scope.vo.oldCustomerList = [];
                $scope.vo.customerList = $scope.vo.customerList.concat(response.modelModel.dataJson);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        }
    };

    $scope.ready = (function(){
        $scope.vc.queryPreCustomer();
        return arguments.callee;
    })();
}]);