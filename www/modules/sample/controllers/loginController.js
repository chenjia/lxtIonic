angular.module('app').controller('loginController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        needCheck: false,
        username: 'admin',
        password: 'admin'
    };
    $scope.vc = {
        refreshCaptcha:function(){
            utils.http(Service.captcha).then(function(response){
                console.log(response);
                $scope.captchaBase64 = response.data.data;
            });
        }
    };

    $scope.login = function() {
        if ($scope.needCheck && !$scope.vo.checkPass) {
            utils.$ionicPopup.alert({
                title:'登录提示',
                template: '请滑动滑块验证'
            });
            return;
        }
        utils.$ionicLoading.show({
            scope:$scope,
            duration:5000,
            template:'<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner><br/>登录中'
        });
        utils.http(Service.login).success(function(response){
            console.log(response);
            if(response.status==500){
                utils.$ionicPopup.alert({
                    title:'登录提示',
                    template:response.msg
                });
            }else{
                utils.cache.set('session',response.data);
                $rootScope.go('home');
            }
        }).finally(function(){
            utils.$ionicLoading.hide();
        });
    };

    $scope.vc.showPatternLock = function(){
        $rootScope.showPatternLock('input');
    };

    var getuserInfo = function(resp) {
        $rootScope.user = resp.customer;
        localStorage.setItem('user', angular.toJson(resp.customer));

    };

    var fakeData = function() {
        $http({
            cache: false,
            method: 'GET',
            url: 'app/login/data/user.json',
        }).then(function(resp) {
            $rootScope.user = resp.data;
            localStorage.setItem('user', angular.toJson(resp.data));
        });
    };

    (function initProcess() {
        var drag = $('#drag');
        var handler = drag.find('.handler');
        var drag_bg = drag.find('.drag_bg');
        var text = drag.find('.drag_text');
        var maxWidth = drag.width() - handler.width(); //能滑动的最大间距

        $scope.dragRight = function(event) {
            if (!$scope.vo.checkPass) {
                var _x = event.gesture.deltaX;
                if (_x > 0 && _x <= maxWidth) {
                    handler.css({ 'left': _x });
                    drag_bg.css({ 'width': _x });
                } else if (_x > maxWidth) { //鼠标指针移动距离达到最大时清空事件
                    handler.css({ 'left': maxWidth });
                    drag_bg.css({ 'width': maxWidth });
                    handler.removeClass('handler_bg').addClass('handler_ok_bg');
                    text.text('验证通过');
                    drag.css({ 'color': '#fff' });
                    handler.unbind('mousedown');
                    $scope.vo.checkPass = true;
                }
            }
        };

        $scope.release = function() {
            if (!$scope.vo.checkPass) {
                handler.css({ 'left': 0 });
                drag_bg.css({ 'width': 0 });
            }
        };

        utils.$compile($('[mfb-menu]'))($rootScope);

        utils.http(Service.captcha).then(function(response){
            console.log(response);
            $scope.img = response.data.b64Img;
        });
    })();
}]);