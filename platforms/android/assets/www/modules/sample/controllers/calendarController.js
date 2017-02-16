angular.module('app').controller('calendarController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        date:{
            year:new Date().getFullYear(),
            month:new Date().getMonth()
        }
    };
    
    $scope.vc = {
        
    };

    $scope.ready = function(){
    	calendar = mobiscroll.calendar('#calendar', {
            theme: 'mobiscroll',
            display: 'inline',
            layout: 'liquid',
            lang:'zh',
            firstDay: 1,
            controls: ['calendar','date','time'],
            headerText:'请选择查看日期',
            showScrollArrows: true,
            events:(function(){
                var events = [];
                var icons = ['paw','heart','flag'];
                for(var m=1;m<=12;m++){
                    var count = parseInt(Math.random()*10,10);
                    for(var i=0;i<count;i++){
                        var day = parseInt(Math.random()*31,10);
                        var icon = icons[parseInt(Math.random()*3,10)];
                        events.push({
                            d:m+'/'+day,
                            icon:icon
                        });
                    }
                }
                return events;
            })(),
            onMonthChange:function(event, inst){
                $scope.vo.date = event;
                $scope.$apply();
            }
        });
    }();
}]);