angular.module('utils.service').run(['utils',function(utils){
	$.extend(window.Service,{
		slideBox:'/modules/sample/data/lbpicture.json',
		address:'/modules/sample/data/address.json'
	});
}]);