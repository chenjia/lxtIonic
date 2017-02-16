angular.module('app').directive('inputColor', ['$compile', 'utils', function($compile, utils) {
	return {
		restrict: 'AE',
		require: 'ngModel',
		scope: {
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
					placeholder:'请选择颜色',
					headerText:attr.headerText||'请选择',
					buttons:['clear','cancel','set'],
					onSet: function(value, inst) {
						// scope.ngModel = inst.getVal();
						// scope.$apply();
					}
				};

				var instance = element.mobiscroll();
				instance.color(options);
			});
		}
	};
}]);