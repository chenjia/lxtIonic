angular.module('app').directive('chart', ['$compile',function($compile) { 
	return { 
		restrict:'E',
		replace:true,
		scope: {
			options:'=',
			click:'&'
		},
		template:'<div></div>',
		link:function(scope, element, attrs, ctrls){
			if(attrs.width){
				element.css('width',attrs.width);
			}
			if(attrs.height){
				element.css('height',attrs.height);
			}
			attrs.type = 'bar';
        	var myChart = echarts.init(element[0],attrs.theme || '');
			var effects = ['spin','bar','ring','whirling','dynamicLine','bubble'];
			var effect = effects[parseInt(Math.random()*effects.length)];
			myChart.showLoading({
			    text : attrs.loading||'渲染中...',
			    effect : effect,
			    textStyle : {
			        fontSize : 20
			    }
			});
			if(scope.options){
				myChart.setOption(scope.options);
                myChart.on('click', function(data){
                	if(scope.click){
                		scope.click({data:data});
                	}
                });
                myChart.hideLoading();
			}
			scope.$watch('options',function(newValue){
				if(newValue){
					myChart.setOption(newValue,true);
					myChart.hideLoading();
				}
			});
		}
	};
}]);