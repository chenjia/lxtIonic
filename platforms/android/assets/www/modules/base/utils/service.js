angular.module('utils.service',[]).run(['utils',function(utils){
	window.Service = {
		login:{
			url:'/callServiceByMobile/101.do',
			params:{
				name:'1011030A30',
				password:'Abcd1234',
				isRemMe:'1',
				devType:'1',
				devId:'6167116776639880000',
				validRandomId:'432422',
				__userId:'1011030A30',
				__devType:'1',
				__devId:'6167116776639880000',
				serviceId:'101'
			}
		},
		captcha:{
			url:'/callServiceByMobile/197.do',
			params:{
				serviceId:'197'
			}
		},
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