angular.module('app').controller('listController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        items:[],
        loading:false
    };
    
    $scope.vc = {
        doRefresh:function(){
            utils.$timeout(function(){
                $scope.$broadcast('scroll.refreshComplete');
            },3000);
        },
        loadMore:function(){
            $scope.vo.loading = true;
            utils.$timeout(function(){
                $scope.vo.items.push({id:$scope.vo.items.length+1,name:'item '+($scope.vo.items.length+1)});
                $scope.$broadcast('scroll.infiniteScrollComplete');
                $scope.vo.loading = false;
            },1000);
        },
        showMenu:function($event){
            utils.$ionicPopover.fromTemplateUrl('menu.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
                $scope.popover.show($event);
            });
        },
        add:function(){
            utils.$ionicModal.fromTemplateUrl('details.html',{
                scope: $scope,
                animation:'slide-in-up'
            }).then(function(modal){
                modal.show();
                $scope.modal = modal;
                $scope.vo.title='新增';
            });
            $scope.popover.hide();
        },
        doAdd:function(){
            $scope.vo.items.push({id:$scope.vo.items.length+1,name:$scope.vo.item});
            $scope.modal.hide();
        },
        delete:function(){
            $scope.vo.showDelete = !$scope.vo.showDelete;
            $scope.vo.showReorder = false;
            $scope.popover.hide();
        },
        doDelete:function($index){
            $scope.vo.items.splice($index,1);
        },
        update:function(){
            utils.$ionicModal.fromTemplateUrl('details.html',{
                scope: $scope,
                animation:'slide-in-up'
            }).then(function(modal){
                modal.show();
                $scope.modal = modal;
                $scope.vo.item = $scope.vo.items[0].name;
                $scope.vo.title='新增';
            });
            $scope.popover.hide();
        },
        reorder:function(){
            $scope.vo.showReorder = !$scope.vo.showReorder;
            $scope.vo.showDelete = false;
            $scope.popover.hide();
        },
        reorderItem:function(item,fromIndex,toIndex){
            $scope.vo.items.splice(fromIndex, 1);
            $scope.vo.items.splice(toIndex, 0, item);
        },
        search:function(){
            alert('search');
            $scope.popover.hide();
        },
        showOptions:function($event){
            if($($event.target).parent().next().hasClass('invisible')){
                $($event.target).parent().css({transform:'translate3d(-178px, 0px, 0px)'}).next().removeClass('invisible');
            }else{
                $($event.target).parent().css({transform:''}).next().addClass('invisible');
            }
        }
    };

    $scope.ready = function(){
        utils.$timeout(function(){
            for(var i=0;i<20;i++){
                $scope.vo.items.push({id:$scope.vo.items.length+1,name:'item '+($scope.vo.items.length+1)});
            }
        },1000);
    }();
}]);