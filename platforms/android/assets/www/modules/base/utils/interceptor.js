angular.module('utils.interceptor',['utils.cache']).factory('httpInterceptor',['$q','$rootScope','cache',function($q,$rootScope,cache){
	var isSessionTimeout = false;
	return {
		request:function(config){
			// if(config.url.substr(0,9)!='template/'){
			// 	config.url = config.url + '?_='+Config.random;
			// }
			return config;
		},
		response:function(response){
			var status = response.resultStatus;
			if(response.config.url.indexOf(Config.server)!=-1 && '.json'!=response.config.url.substr(response.config.url.length-5,5)){
				if(Config.debug){
					response.data = response.data.dataObj;
				}else{
					response.data = eval('('+app.utils.security.decrypt(response.data.opt)+')');
				}
				console.log(response);
				switch(response.data.status){
					case '401':
						if(!isSessionTimeout){
							if(response.config.url.indexOf('logout')==-1){
								alert('会话已超时，请重新登录！');
							}
							cache.setItem('session','');
							$rootScope.isLogin = false;
							location.href='';
						}
						isSessionTimeout = true;
						break;
					default:
						break;
				}

				switch(status){
					case 401:
						alert('对不起，您没有权限访问该模块！');
						break;
					case 500:
						alert('啊哦！出bug了，赶紧到后台去瞧瞧！');
						break;
					default:
						break;
				}
			}

			return response;
		},
		requestError:function(request){
			console.log('【请求异常】');
			return $q.reject(request);
		},
		responseError:function(response){
			console.log('【响应异常】');
			console.log(response);
			return $q.reject(response);
		}
	};
}]).config(['$httpProvider',function($httpProvider){
	$httpProvider.interceptors.push('httpInterceptor');
}]);
