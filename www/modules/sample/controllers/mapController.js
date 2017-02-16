angular.module('app').controller('mapController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        
    };
    
    $scope.vc = {
        enter:function($event){
            if($event.keyCode == 13){
                $scope.vc.searchAddress($scope.vo.searchKey);
            }
        },
        searchAddress:function(searchKey){
            var BMap = $scope.vo.BMap;
            var map = $scope.vo.map;
            var gc = new BMap.Geocoder();
            gc.getPoint(searchKey, function(point){
                if (point) {
                    map.centerAndZoom(point, 16);
                    var marker = new BMap.Marker(point);
                    map.addOverlay(marker);
                    $scope.vo.overlays = [marker];
                    gc.getLocation(point, function(rs){
                        var addComp = rs.addressComponents;
                        $scope.vo.addressList = [{
                            address:rs.address,
                            gps:point.lng+','+point.lat
                        }];
                        $scope.$apply();
                    });
                }else{
                    alert('对不起，没有找到您输入的地址！');
                }
            }, "中国");
        }
    };

    $scope.ready = function(){
    	window.mapCallback = function(BMap){
            var map = new BMap.Map("mapBox");
            $scope.vo.BMap = BMap;
            $scope.vo.map = map;
            var point = new BMap.Point(121.7443650000,31.1506170000);
            map.addOverlay(new BMap.Marker(point));
            map.centerAndZoom(point,15);
            map.addControl(new BMap.ZoomControl());

            function ZoomControl(){
                this.defaultAnchor = 2;
                this.defaultOffset = new BMap.Size(10, 35);
            }
            ZoomControl.prototype = new BMap.Control();
            ZoomControl.prototype.initialize = function(map){
                var div = document.createElement("div");
                div.innerHTML = '<img style="width:32px;height:32px;" src="../../../../images/common/maps_gps.png">';
                div.onclick = function(e){
                    map.centerAndZoom(point,15);
                }
                map.getContainer().appendChild(div);
                return div;
            }
            var myZoomCtrl = new ZoomControl();
            map.addControl(myZoomCtrl);
        }
    }();
}]);