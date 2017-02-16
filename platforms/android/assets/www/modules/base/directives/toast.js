angular.module('app').directive('toast', ['$compile', 'utils', function($compile, utils) {
	return {
		restrict: 'E',
		require: 'ngModel',
		scope: {
			ngModel: '='
		},
		link: function(scope, element, attr, ctrl) {
			var position = attr.position||'center';
			$('.toast-'+position).remove();
			var box = $('<div class="toast-box toast-'+position+'"></div>').appendTo('body');
			
			scope.$watch('ngModel',function(newValue){
				if(!newValue) return;

				if(angular.isArray(newValue)){
					var value = angular.copy(newValue);
					for(var i=0;i<value.length;i++){
						(function(i){
							if(!angular.isObject(value[i])){
								value[i] = {text:value[i]};
							}
							var item = $('<div class="toast-item toast-'+value[i].type+' animated fadeInDown">'+value[i].text+'</div><br/>').appendTo(box);
							setTimeout(function(){
								item.addClass('fadeOutUp');
								setTimeout(function(){
									item.remove();
								},500);
							},5000);
						})(i);
					}
				}else{
					var value;
					if(angular.isString(newValue)){
						value = {text:newValue};
					}else{
						value = angular.copy(newValue);
					}
					var item = $('<div class="toast-item toast-'+value.type+' animated fadeInDown">'+value.text+'</div><br/>').appendTo(box);
					setTimeout(function(){
						item.addClass('fadeOutUp');
						setTimeout(function(){ 
							item.remove();
						},500);
					},5000);
				}
			});
		}
	};
}]);