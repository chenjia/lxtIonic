angular.module('utils.cache',[]).factory('cache',['$rootScope',function($rootScope){
	return {
		set:function(key,value){
			if(typeof value =='string'){
				localStorage.setItem(key,value);
			}else{
				localStorage.setItem(key,JSON.stringify(value));
			}
		},
		get:function(key){
			var value = localStorage.getItem(key);
			if(value && (value.substr(0,1)=='{'||value.substr(0,1)=='[')){
				try{
					value = eval('('+value+')');
				}catch(e){

				}
			}
			return value;
		}
	};
}]);
