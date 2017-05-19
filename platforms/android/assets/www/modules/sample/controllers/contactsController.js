angular.module('app').controller('contactsController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
    $scope.vo = {
        contacts:[],
        aliasToast:false,
        aliasList:['热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
    };
    
    $scope.vc = {
        toastTimer:null,
        loadContacts:function(){
            var response = {
                data:{
                    "hot":["爸爸","妈妈","老板","老婆","老大","啦啦"],
                    "contacts":{
                        "A":[{"name":"阿拉尔"}],
                        "B":[{"name":"巴中"}],
                        "C":[{"name":"长治"}],
                        "D":[{"name":"大兴安岭地区"}],
                        "E":[{"name":"鄂尔多斯"}],
                        "F":[{"name":"佛山"}],
                        "G":[{"name":"高雄"}],
                        "H":[{"name":"黄南州"}],
                        "I":[],
                        "J":[{"name":"景德镇"}],
                        "K":[{"name":"昆明"}],
                        "L":[{"name":"六盘水"}],
                        "M":[{"name":"眉山"}],
                        "N":[{"name":"南昌"}],
                        "O":[],
                        "P":[{"name":"攀枝花"}],
                        "Q":[{"name":"七台河"}],
                        "R":[{"name":"日照"}],
                        "S":[{"name":"石家庄"}],
                        "T":[{"name":"唐山"}],
                        "U":[],
                        "V":[],
                        "W":[{"name":"吴忠"}],
                        "X":[{"name":"邢台"}],
                        "Y":[{"name":"玉林"}],
                        "Z":[{"name":"昭通"}]
                    }
                }
            };
            $scope.vo.contacts = {
                "A":response.data.contacts.A,
                "B":response.data.contacts.B,
                "C":response.data.contacts.C,
                "D":response.data.contacts.D,
                "E":response.data.contacts.E,
                "F":response.data.contacts.F,
                "G":response.data.contacts.G
            };
            utils.$timeout(function(){
                $scope.vo.contacts = response.data.contacts;
            },1000);
            $scope.vo.hotContacts = response.data.hot;
        },
        selectAlias:function(event, index) {
            var height = document.getElementById('draggableAlias').offsetHeight;
            var itemHeight = height/$scope.vo.aliasList.length;
            var y = event.gesture.deltaY+itemHeight/2;
            var rangeIndex = parseInt(y / itemHeight) + index;
            if (rangeIndex < 0) {
                rangeIndex = 0;
            }else if(rangeIndex >= $scope.vo.aliasList.length){
                rangeIndex = $scope.vo.aliasList.length-1;
            }
            $scope.vo.aliasToast = true;
            if($scope.vo.alias!=$scope.vo.aliasList[rangeIndex]){
                $scope.vo.alias = $scope.vo.aliasList[rangeIndex];
                utils.$location.hash($scope.vo.alias);
            }
            utils.$ionicScrollDelegate.$getByHandle('contactsScroll').anchorScroll();
            utils.$timeout.cancel($scope.vo.toastTimer);
            $scope.vo.toastTimer = utils.$timeout(function(){
                $scope.vo.aliasToast = false;
            }, 2000);
        }
    };

    $scope.ready = function(){
        $scope.vc.loadContacts();
    }();
}]);