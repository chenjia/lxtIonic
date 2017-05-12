angular.module('app').filter('short',['$sce',function($sce){
	return function(value,length){
		length = length || 12;
		if(value && value.length>length){
			value = value.substr(0,length)+'...';
		}
		return value;
	};
}]);