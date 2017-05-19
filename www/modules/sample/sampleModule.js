angular.module('app.route').config(['$stateProvider',function($stateProvider){
	$stateProvider.state('home', {
        url:'/home',
        controller:'homeController',
        templateUrl:function(){
            return 'modules/sample/views/home.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/base/directives/toast.js',
                    'modules/sample/controllers/homeController.js'
                ]);
            }]
        }
    }).state('login', {
        url:'/login',
        cache:false,
        controller:'loginController',
        templateUrl:function(){
            return 'modules/sample/views/login.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/loginController.js'
                ]);
            }]
        }
    }).state('list', {
        url:'/list/:index',
        cache:false,
        controller:'listController',
        templateUrl:function(){
            return 'modules/sample/views/list.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/listController.js'
                ]);
            }]
        }
    }).state('contacts', {
        url:'/contacts',
        cache:false,
        controller:'contactsController',
        templateUrl:function(){
            return 'modules/sample/views/contacts.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/contactsController.js'
                ]);
            }]
        }
    }).state('chart', {
        url:'/chart',
        cache:false,
        controller:'chartController',
        templateUrl:function(){
            return 'modules/sample/views/chart.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'echarts',
                    'modules/sample/controllers/chartController.js'
                ]);
            }]
        }
    }).state('form', {
        url:'/form',
        cache:false,
        controller:'formController',
        templateUrl:function(){
            return 'modules/sample/views/form.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'rating',
                    'modules/base/directives/input-datetime.js',
                    'modules/base/directives/input-select.js',
                    'modules/base/directives/input-sfz.js',
                    'modules/base/directives/input-treelist.js',
                    'modules/base/directives/input-color.js',
                    'modules/base/directives/toast.js',
                    'modules/sample/controllers/formController.js'
                ]);
            }]
        }
    }).state('tab', {
        url:'/tab',
        cache:false,
        controller:'tabController',
        templateUrl:function(){
            return 'modules/sample/views/tab.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/tabController.js'
                ]);
            }]
        }
    }).state('loading', {
        url:'/loading',
        cache:false,
        controller:'loadingController',
        templateUrl:function(){
            return 'modules/sample/views/loading.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/loadingController.js'
                ]);
            }]
        }
    }).state('live', {
        url:'/live',
        cache:false,
        controller:'liveController',
        templateUrl:function(){
            return 'modules/sample/views/live.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/liveController.js'
                ]);
            }]
        }
    }).state('calendar', {
        url:'/calendar',
        cache:false,
        controller:'calendarController',
        templateUrl:function(){
            return 'modules/sample/views/calendar.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'mobiscroll',
                    'modules/sample/controllers/calendarController.js'
                ]);
            }]
        }
    }).state('map', {
        url:'/map',
        cache:false,
        controller:'mapController',
        templateUrl:function(){
            return 'modules/sample/views/map.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/mapController.js'
                ]);
            }]
        }
    }).state('customerList', {
        url:'/customer/list',
        cache:false,
        abstract:true,
        controller:'customerController',
        templateUrl:function(){
            return 'modules/sample/views/customerList.html';
        },
        resolve:{
            load:['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/customerController.js'
                ]);
            }]
        }
    }).state('customerList.tabs', {
        url:'/tabs/:type',
        cache:false,
        views:{
            'customer':{
                controllerProvider:['$stateParams',function($stateParams){
                    return $stateParams.type+'CustomerController';
                }],
                templateUrl:function(){
                    return 'modules/sample/views/tabsCustomerList.html';
                },
                resolve:{
                    load:['$ocLazyLoad','$stateParams',function ($ocLazyLoad,$stateParams) {
                        return $ocLazyLoad.load([
                            'modules/sample/controllers/'+$stateParams.type+'CustomerController.js'
                        ]);
                    }]
                }
            }
        }
    }).state('customerList.tab', {
        url:'/tab/:type',
        cache:false,
        nativeTransitions:null,
        views:{
            'customer':{
                controllerProvider:['$stateParams',function($stateParams){
                    return $stateParams.type+'CustomerController';
                }],
                templateUrl:function(params){
                    return 'modules/sample/views/'+params.type+'CustomerList.html';
                },
                resolve:{
                    load:['$ocLazyLoad','$stateParams', function ($ocLazyLoad,$stateParams) {
                        return $ocLazyLoad.load([
                            'modules/sample/controllers/'+$stateParams.type+'CustomerController.js'
                        ]);
                    }]
                }
            }
        }
    });
}]);