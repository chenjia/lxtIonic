angular.module('utils.service',[]).run(['utils',function(utils){
	window.Service = {
		login:{
			url:'/system/login',
			params:{
				username:'admin',
				password:'admin'
			}
		},
		captcha:'/captcha',
		logout:{url:'/system/logout'},
		slideImg:'/modules/home/data/lbpicture.json',
		contacts:{url:'/modules/demo/data/contacts.json'},
		test:{url:'/modules/demo/data/contacts.json'}
	};

	// test all the service/handler
	// setTimeout(function(){
	// 	for(var i in Service){
	// 		var item = Service[i];
	// 		console.log(item);
	// 		utils.http(item);
	// 	}
	// },1000);
}]);