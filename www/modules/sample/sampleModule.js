angular.module('app.route').config(['$stateProvider',function($stateProvider){
	$stateProvider.state('home', {
        url:"/home",
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
        url:"/login",
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
        url:"/list",
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
        url: "/contacts",
        controller:'contactsController',
        templateUrl:function(){
            return 'modules/sample/views/contacts.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/contactsController.js'
                ]);
            }]
        }
    }).state('chart', {
        url: "/chart",
        controller:'chartController',
        templateUrl:function(){
            return 'modules/sample/views/chart.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'echarts',
                    'modules/sample/controllers/chartController.js'
                ]);
            }]
        }
    }).state('form', {
        url: "/form",
        controller:'formController',
        templateUrl:function(){
            return 'modules/sample/views/form.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
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
        url: "/tab",
        controller:'tabController',
        templateUrl:function(){
            return 'modules/sample/views/tab.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/tabController.js'
                ]);
            }]
        }
    }).state('loading', {
        url: "/loading",
        controller:'loadingController',
        templateUrl:function(){
            return 'modules/sample/views/loading.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/loadingController.js'
                ]);
            }]
        }
    }).state('live', {
        url: "/live",
        controller:'liveController',
        templateUrl:function(){
            return 'modules/sample/views/live.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/liveController.js'
                ]);
            }]
        }
    }).state('calendar', {
        url: "/calendar",
        controller:'calendarController',
        templateUrl:function(){
            return 'modules/sample/views/calendar.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'mobiscroll',
                    'modules/sample/controllers/calendarController.js'
                ]);
            }]
        }
    }).state('map', {
        url: "/map",
        controller:'mapController',
        templateUrl:function(){
            return 'modules/sample/views/map.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/mapController.js'
                ]);
            }]
        }
    }).state('customerList', {
        url: "/customer/list",
        controller:'customerController',
        templateUrl:function(){
            return 'modules/sample/views/customerList.html';
        },
        resolve: {
            load: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'modules/sample/controllers/customerController.js'
                ]);
            }]
        }
    });
}]);