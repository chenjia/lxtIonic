angular.module('app').controller('oldCustomerController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        hasMore:true,
        oldCustomerList:[]
    };

    $scope.vc = {
        queryOldCustomer:function(){
            $scope.vo.oldCustomerList = [];
            utils.http(Service.queryOldCustomer).success(function(response){
                $scope.vo.hasMore = true;
                $scope.vo.oldCustomerList = $scope.vo.oldCustomerList.concat(response.customerList);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        },
        doRefresh:function(){
            utils.$timeout(function(){
                $scope.$broadcast('scroll.refreshComplete');
            },3000);
        },
        loadMore:function(){
            $scope.vo.loading = true;
            utils.http(Service.queryOldCustomer).success(function(response){
                $scope.vo.loading = false;
                $scope.vo.customerList = [];
                $scope.vo.oldCustomerList = $scope.vo.oldCustomerList.concat(response.customerList);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        }
    };

    $scope.ready = function(){
        $scope.vc.queryOldCustomer();
        return arguments.callee;
    }();
}]);