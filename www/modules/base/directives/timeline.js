angular.module('app').directive('timeline', ['$compile', 'utils', function($compile, utils) {
	return {
		restrict: 'AE',
		replace:true,
		scope: {
			items: '='
		},
		template:
		'<div style="padding:10px;">'+
			'<div class="timeline-item" ng-repeat="item in items track by $index">'+
				'<div class="line-item">'+
					'<div class="line" ng-class="{history:item.history}" ng-style="{borderColor:item.history?color[$index]:\'#ccc\',borderStyle:\'dashed\'}">'+
						'<div ng-if="$index == 0" class="line-start"></div>'+
						'<div class="line-icon" ng-class="item.icon" ng-style="{background:(item.history?color[$index]:\'#ccc\')}"></div>'+
					'</div>'+
				'</div>'+

				'<div class="content-item" ng-style="{border:\'1px solid \' +(item.history?color[$index]:\'#ccc\'),borderLeft:\'4px solid \'+(item.history?color[$index]:\'#ccc\'),boxShadow:\'2px 2px 5px \'+(item.history?color[$index]:\'#888\')}">'+
					'<div class="content-arrow" ng-style="{borderRight:\'8px solid \'+(item.history?color[$index]:\'#ccc\')}"></div>'+
					'<div class="content-title" ng-style="{borderBottom:\'1px dashed \'+(item.history?color[$index]:\'#ccc\')}">{{item.title}}</div>'+
					'<div class="content-details">{{item.content}}</div>'+
					'<div class="content-time">{{item.time}}</div>'+
				'</div>'+
			'</div>'+
		'</div>',
		link: function(scope, element, attr, ctrl) {
			console.log(scope.items)
			scope.color = [
      	'#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
      ]
		}
	};
}]);