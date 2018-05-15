angular.module('app').controller('homeController', ['$rootScope', '$scope', 'utils', function($rootScope, $scope, utils) {
    $scope.vo = {
        slides: [{
            lbpicNum: 1,
            lbpicUrl: 'images/home/banner1.jpg',
            icon: 'fa fa-list'
        }, {
            lbpicNum: 2,
            lbpicUrl: 'images/home/banner2.jpg',
            icon: 'fa fa-bar-chart'
        }, {
            lbpicNum: 3,
            lbpicUrl: 'images/home/banner3.jpg',
            icon: 'fa fa-address-book-o'
        }],
        timelines:[{
            time:(function(){
                let date = new Date()
                date.setHours(9, 0, 0, 0)
                return date
            })(),
            history:(function(){
                let date = new Date()
                date.setHours(9, 0, 0, 0)
                return date < new Date()
            })(),
            title:'会议',
            content:'部门早会',
            icon:'fa fa-microphone'
        },{
            time:(function(){
                let date = new Date()
                date.setHours(12, 0, 0, 0)
                return date
            })(),
            history:(function(){
                let date = new Date()
                date.setHours(12, 0, 0, 0)
                return date < new Date()
             })(),
            title:'午饭',
            content:'员工食堂用餐',
            icon:'fa fa-cutlery'
        },{
            time:(function(){
                let date = new Date()
                date.setHours(15, 0, 0, 0)
                return date
            })(),
            history:(function(){
                let date = new Date()
                date.setHours(15, 0, 0, 0)
                return date < new Date()
            })(),
            title:'下午茶',
            content:'放松一下心情',
            icon:'fa fa-coffee'
        },{
            time:(function(){
                let date = new Date()
                date.setHours(20, 0, 0, 0)
                return date
            })(),
            history:(function(){
                let date = new Date()
                 date.setHours(20, 0, 0, 0)
                 return date < new Date()
            })(),
            title:'聚会',
            content:'公司年会',
            icon:'fa fa-glass'
        },{
            time:(function(){
                let date = new Date()
                date.setHours(22, 0, 0, 0)
                return date
            })(),
            history:(function(){
                let date = new Date()
                date.setHours(22, 0, 0, 0)
                return date < new Date()
            })(),
            title:'睡觉',
            content:'亲爱滴，晚安么么哒~',
            icon:'fa fa-moon-o'
        }]
    };

    $scope.vc = {
        slideBox: function() {
            utils.http(Service.slideBox).success(function(response) {
                $scope.vo.slides = response.data.packageList.packages.response.lbpiclist.lbpic;
            });
        },
        showPopover: function($event) {
            utils.$ionicPopover.fromTemplateUrl('my-popover.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
                popover.show($event);
            });
        },
        onHomeScroll: function(event) {
            
        }
    }

    $scope.ready = function() {
        // setTimeout(function(){
        //     console.log(cordova.plugins.backgroundvideo);
        //     cordova.plugins.backgroundvideo.start('myvideo', 'front', true, null, null);
        //     setTimeout(function(){
        //         cordova.plugins.backgroundvideo.stop(function(suc){
        //             console.log(suc);
        //             console.log(suc.substr(0,suc.lastIndexOf('/')+1), suc.substr(suc.lastIndexOf('/')+1), cordova.file.externalDataDirectory, suc.substr(suc.lastIndexOf('/')+1));
        //             utils.$cordovaFileTransfer.download(suc, cordova.file.externalDataDirectory+suc.substr(suc.lastIndexOf('/')+1), {}, true)
        //             .then(function(result) {
        //                 console.log(result);
        //             }, function(err) {
        //                 console.log(err);
        //             }, function (progress) {
        //                 $scope.downloadProgress = (progress.loaded / progress.total) * 100;
        //                 console.log($scope.downloadProgress);
        //             });
        //         }, function(fail){
        //             console.log(fail);
        //         });
        //     },10000);
        // },5000);
    }();
}]);