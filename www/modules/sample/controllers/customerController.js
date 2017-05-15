angular.module('app').controller('customerController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        index:0,
        customerList:[],
        oldCustomerList:[],
        netCustomerList:[]
    };

    $scope.vc = {
        queryCustomer:function(){
            $scope.vo.customerList = [];
            utils.http(Service.queryCustomer).success(function(response){
                $scope.vo.customerList = response.modelModel.dataJson;
            });
        },
        queryOldCustomer:function(){
            $scope.vo.oldCustomerList = [];
            utils.http(Service.queryOldCustomer).success(function(response){
                console.log(response);
                $scope.vo.oldCustomerList = $scope.vo.oldCustomerList.concat(response.customerList);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        },
        queryNetCustomer:function(){
            $scope.vo.netCustomerList = [];
            utils.http(Service.queryNetCustomer).success(function(response){
                console.log(response);
                $scope.vo.netCustomerList = $scope.vo.netCustomerList.concat(response.customerList);
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        },
        switchTab:function(index){
            utils.$ionicScrollDelegate.$getByHandle('customerScroll').scrollTo(0, 0);
            $scope.vo.customerList = [];
            $scope.vo.oldCustomerList = [];
            $scope.vo.index = index;
            // utils.$timeout(function(){
            //     if(index==0){
            //         $scope.vc.queryCustomer();
            //     }else if(index==1){
            //         $scope.vc.queryOldCustomer();
            //     }else if(index==2){
            //         $scope.vc.queryNetCustomer();
            //     }
            // },500);
        },
        doRefresh:function(){
            utils.$timeout(function(){
                $scope.$broadcast('scroll.refreshComplete');
            },3000);
        },
        loadMore:function(){
            console.log('loadMore');
            $scope.vo.loading = true;
            if($scope.vo.index==0){
                utils.http(Service.queryCustomer).success(function(response){
                    $scope.vo.customerList = $scope.vo.customerList.concat(response.modelModel.dataJson);
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
            }else if($scope.vo.index==1){
                utils.http(Service.queryOldCustomer).success(function(response){
                    $scope.vo.oldCustomerList = $scope.vo.oldCustomerList.concat(response.customerList);
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
            }
            
        },
    };

    $scope.ready = function(){
        return arguments.callee;
    }();
}]);