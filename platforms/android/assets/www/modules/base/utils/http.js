angular.module('utils.http',['utils.security']).factory('http',['$http','security',function($http,security){
	return function(service,params,config){
		var url = service;
		console.log(service);
		if(typeof service == 'object'){
			url = service.url;
			if(!params){
				params = service.params;
			}
			if(!config){
				config = service.config;
			}
		}else if(typeof service == 'string'){
			url = service;
		}

		if(url.substr(0,4) != 'http' && url.substr(0,1)!='.'){
			url = Config.server + url;
		}

		var defaultConfig = {
			type:'POST',
			timeout:30000,
			headers:{},
			transformRequest:[ function(data) {
				return angular.isObject(data) && String(data) !== '[object File]' ? formatParams(data) : data;
			}]
		};
		config = config?angular.extend({},defaultConfig,config):defaultConfig;
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
		console.log(params);
		var paramStr = angular.toJson(params);
		var promise;
		if('.json'==url.substr(url.length-5,5)){
			promise = $http.get(url,config);
		}else{
			console.log(config);
			promise = $http.post(url,{devId:'',userId:'',serviceId:params.serviceId,opt:Config.debug?paramStr:security.encrypt(angular.toJson(paramStr))},config);
		}
		return promise;
	};
}]);

var formatParams = function(obj) {
	var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
	for (name in obj) {
		value = obj[name];
		if (value instanceof Array) {
			for (i = 0; i < value.length; i++) {
				subValue = value[i];
				fullSubName = name + '[' + i + ']';
				innerObj = {};
				innerObj[fullSubName] = subValue;
				query += formatParams(innerObj) + '&';
			}
		} else if (value instanceof Object) {
			for (subName in value) {
				subValue = value[subName];
				fullSubName = name + '[' + subName
						+ ']';
				innerObj = {};
				innerObj[fullSubName] = subValue;
				query += formatParams(innerObj) + '&';
			}
		} else if (value !== undefined
				&& value !== null) {
			query += encodeURIComponent(name) + '='
					+ encodeURIComponent(value) + '&';
		}
	}
	return query.length ? query.substr(0, query.length - 1) : query;
};