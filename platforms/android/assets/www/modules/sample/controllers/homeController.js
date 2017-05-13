angular.module('app').controller('homeController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        slides:[{
            lbpicNum:1,
            lbpicUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1485055343&di=1b601ff2ad34d50934cdeb97e23187da&imgtype=jpg&er=1&src=http%3A%2F%2Ff11.topit.me%2Fl%2F201012%2F04%2F12914578215075.jpg'
        },{
            lbpicNum:2,
            lbpicUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2728159135,4130384536&fm=15&gp=0.jpg'
        },{
            lbpicNum:3,
            lbpicUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1484459979379&di=baaaa8808fb1da266db58b415cac2119&imgtype=0&src=http%3A%2F%2Ffile.desktx.com%2Fpc%2Fwallpaper%2Fplant%2F20090622%2FBlue-flowers-320-240.jpg'
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