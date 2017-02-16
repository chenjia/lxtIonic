angular.module('app').directive('inputSelect', ['$compile', 'utils', function($compile, utils) {
	return {
		restrict: 'AE',
		require: 'ngModel',
		scope: {
			selectData:'=',
			ngModel: '='
		},
		link: function(scope, element, attr, ctrl) {
			utils.$ocLazyLoad.load([
				'bower_components/mobiscroll/css/mobiscroll.custom-3.0.0-beta6.min.css',
                'bower_components/mobiscroll/js/mobiscroll.custom-3.0.0-beta6.min.js'
			]).then(function() {
				element = $(element[0]);
				var selectData = [{text:'',value:''}];
				for(var i=0;i<scope.selectData.length;i++){
					var option = scope.selectData[i];
					if(typeof option == 'object'){
						selectData.push({
							text:attr.prefix+option[attr.optionText||'text']+attr.suffix,
							value:option[attr.optionValue||'value']
						});
					}else{
						selectData.push({
							text:(attr.prefix||'')+option+(attr.suffix||''),
							value:option
						});
					}
				}

				var options = {
					theme: 'android-holo-light',
					lang: 'zh',
					display:'bottom',
					data:selectData,
					placeholder:'请选择选项',
					circular:(attr.circular==true||attr.circular=='true')?true:false,
					headerText:attr.headerText||'请选择',
					buttons:['clear','cancel','set'],
					onInit:function(event,inst){
						if(scope.ngModel){
							inst.setVal(scope.ngModel);
						}
					},
					onBeforeShow:function(event,inst){
						if(!scope.ngModel){
							inst.setVal(selectData[1].value);
						}
					},
					onSet: function(value, inst) {
						scope.ngModel = inst.getVal();
						scope.$apply();
					},
					onClear:function(){
						scope.ngModel = '';
						scope.$apply();
					}
				};

				if(attr.dataValue){
					options.dataValue = attrs.dataValue;
				}

				if(attr.dataText){
					options.dataText = attrs.dataText;
				}

				element.mobiscroll().select(options);
			});
		}
	};
}]);