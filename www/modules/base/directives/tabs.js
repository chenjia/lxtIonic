angular.module('app').directive('tabs', ['$compile', 'utils', function($compile, utils) {
	return {
		restrict: 'E',
		replace:true,
		scope: {
			items: '=',
      index: '='
		},
		template:
		'<div class="tab-box">'+
        '<style type="text/css">'+
          '.tab-box{'+
              'position:relative;'+
              'border-bottom:1px solid #ddd;'+
          '}'+
          '.tab-box .button.activated{'+
              'border-color:#f8f8f8;'+
              'background:#f8f8f8;'+
          '}'+
          '.tab-bar .button{'+
              'background:white;'+
              'font-size:15px;'+
              'border-radius:0;'+
          '}'+
          '.tab-box .line{'+
              'display:inline-block;'+
              'position:absolute;'+
              'top:45px;'+
              'z-index:9;'+
              'height:3px;'+
              'line-height:3px;'+
              'border-bottom:2px solid #3399FF;'+
              'transition:left .2s ease-in-out;'+
          '}'+
          '.tab-box .badge{'+
            'position:absolute;'+
            'top:13px;'+
            'font-size:14px;'+
            'display:inline-block;'+
            'margin-left:5px;'+
            'padding:0 4px;'+
            'background:red;'+
            'color:white;'+
            'border-radius:8px;'+
          '}'+
      '</style>'+
  		'<div class="tab-bar">'+
    		'<a ng-repeat="item in items" ng-click="changeIndex($index)" class="button" ng-style="{marginRight:$last?\'\':\'40px\',color:index==$index?\'#3399FF\':\'\',width:items[0].width+\'px\'}">'+
          '{{item.title}}'+
          '<span ng-if="item.badge!=null" class="badge">{{item.badge}}</span>'+
        '</a>'+
  		'</div>'+
  		'<div class="line" ng-style="{left:index*(items[0].width+40)+18+\'px\',width:items[0].width-36+\'px\'}"></div>'+
		'</div>',
		link: function(scope, element, attr, ctrl) {
			scope.changeIndex = function(index){
        scope.index = index;
      }
		}
	};
}]);