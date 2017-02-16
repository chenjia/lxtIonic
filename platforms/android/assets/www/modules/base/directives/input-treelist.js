angular.module('app').directive('inputTreelist', ['$compile', 'utils', function($compile, utils) {
	return {
		restrict: 'AE',
		require: 'ngModel',
		replace:true,
		template:
		'<ul style="display:none;">'+
            '<li data-val="{{item.value}}" data-text="{{item.text}}" ng-repeat="item in selectData">{{item.text}}'+
                '<ul>'+
                    '<li data-val="{{item2.value}}" data-text="{{item2.text}}" ng-repeat="item2 in item.children">{{item2.text}}'+
                        '<ul>'+
                            '<li data-val="{{item3.value}}" data-text="{{item3.text}}" ng-repeat="item3 in item2.children">{{item3.text}}</li>'+
                        '</ul>'+
                    '</li>'+
                '</ul>'+
            '</li>'+
        '</ul>',
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

				var options = {
					theme: 'android-holo-light',
					lang: 'zh',
					display:'bottom',
					placeholder:'请选择选项',
					headerText:attr.headerText||'请选择',
					buttons:['clear','cancel','set'],
					onInit:function(event,inst){
						if(scope.ngModel){
							[scope.ngModel.substr(0,2),scope.ngModel.substr(0,4),scope.ngModel];
							var item1 = $('[data-val='+scope.ngModel.substr(0,2)+']').attr('data-text');
							var item2 = $('[data-val='+scope.ngModel.substr(0,4)+']').attr('data-text');
							var item3 = $('[data-val='+scope.ngModel+']').attr('data-text');

							$('#'+element.attr('id')+'_dummy').val(item1+item2+item3);
						}
					},
					onSet:function(event,inst){
						var value = '';
						var text = '';
						$('.mbsc-sc-itm-sel').each(function(){
							value = $(this).attr('data-val');
							text += $(this).html();
						});
						scope.ngModel = value;
						$('#'+element.attr('id')+'_dummy').val(text);
						scope.$apply();
					}
				};

				if(scope.ngModel){
					options.defaultValue = [scope.ngModel.substr(0,2),scope.ngModel.substr(0,4),scope.ngModel];
				}

				setTimeout(function(){
					element.mobiscroll().treelist(options);
				});
			});
		}
	};
}]);