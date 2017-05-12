angular.module('utils',[
	'utils.format',
	'utils.cache',
	'utils.http',
	'utils.service',
	'utils.security',
	'utils.interceptor'
]).factory('utils',[
	'format',
	'cache',
	'http',
	'security',

	'$ocLazyLoad',
	'$filter',
	'$state',
	'$timeout',
	'$interval',
	'$location',
	'$compile',
	'$templateRequest',

	'$ionicPlatform',
	'$ionicHistory',
	'$ionicPosition',
	'$ionicScrollDelegate',
	'$ionicNavBarDelegate',
	'$ionicModal',
	'$ionicLoading',
	'$ionicPopup',
	'$ionicPopover',
	'$ionicViewSwitcher',
	'$ionicSlideBoxDelegate',
	'$ionicSideMenuDelegate',
	
	'$cordovaFileTransfer',
	'$cordovaNetwork',
	'$cordovaCamera',
	'$cordovaGeolocation',function(format,cache,http,security,$ocLazyLoad,$filter,$state,$timeout,$interval,$location,$compile,$templateRequest,$ionicPlatform,$ionicHistory,$ionicPosition,$ionicScrollDelegate,$ionicNavBarDelegate,$ionicModal,$ionicLoading,$ionicPopup,$ionicPopover,$ionicViewSwitcher,$ionicSlideBoxDelegate,$ionicSideMenuDelegate,$cordovaFileTransfer,$cordovaNetwork,$cordovaCamera,$cordovaGeolocation){
	return {
		format:format,
		cache:cache,
		http:http,
		security:security,

		$ocLazyLoad:$ocLazyLoad,
		$filter:$filter,
		$state:$state,
		$timeout:$timeout,
		$interval:$interval,
		$location:$location,
		$compile:$compile,
		$templateRequest:$templateRequest,

		$ionicPlatform:$ionicPlatform,
		$ionicHistory:$ionicHistory,
		$ionicPosition:$ionicPosition,
		$ionicScrollDelegate:$ionicScrollDelegate,
		$ionicNavBarDelegate:$ionicNavBarDelegate,
		$ionicModal:$ionicModal,
		$ionicLoading:$ionicLoading,
		$ionicPopup:$ionicPopup,
		$ionicPopover:$ionicPopover,
		$ionicViewSwitcher:$ionicViewSwitcher,
		$ionicSlideBoxDelegate:$ionicSlideBoxDelegate,
		$ionicSideMenuDelegate:$ionicSideMenuDelegate,

		$cordovaFileTransfer:$cordovaFileTransfer,
		$cordovaNetwork:$cordovaNetwork,
		$cordovaCamera:$cordovaCamera,
		$cordovaGeolocation:$cordovaGeolocation
	};
}]);
