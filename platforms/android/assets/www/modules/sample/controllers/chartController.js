angular.module('app').controller('chartController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	(function init() {
		$scope.vo = {};
		function random(){
		    return Math.round(Math.random() * 10);
		}

		function randomDataArray(length) {
		    var d = [];
		    var len = length||100;
		    while (len--) {
		        d.push(len*100+random());
		    }
		    return d;
		}

		var yingbei = randomDataArray(45);
		var yibei = (function(){
			var array = randomDataArray(45);
        	for(var i=0;i<array.length;i++){
        		if(i>10){
        			array[i] = 200;
        		}else{
        			array[i] = 1200-i*100;
        		}
        	}
        	return array;
		})();
		var ce = [];
		for(var i=0;i<yingbei.length;i++){
			ce[i] = yingbei[i]-yibei[i];
		}

        var options = {
            barOptions:{
				title : {
			        text: '保障和缺口'
			    },
			    animation:true,
			    tooltip : {
			        trigger: 'axis'
			    },
			    grid:{
			    	x:30,
			    	y:50,
			    	x2:30,
			    	y2:30,
			    	borderWidth:0
			    },
			    legend: {
			        x : 'right',
			        data:['已有保障','缺口']
			    },
			    xAxis : [
			        {
			            type : 'category',
			            splitLine:{
			        		show:false
			        	},
			            data : ['应有保障','已有保障']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            splitLine:{
			        		show:false
			        	}
			        }
			    ],
			    series : [
			        {
			            name:'已有保障',
			            type:'bar',
			            stack: 'sum',
			            data:[23, 12],
			            barCategoryGap: '60%',
			            markLine : {
			                data:[
			                    {type : 'max', name: '最大值', itemStyle:{normal:{color:'#32cd32'}}},
			                    {type : 'min', name: '最小值', itemStyle:{normal:{color:'#32cd32'}}}
			                ]
			            }
			        },
			        {
			            name:'缺口',
			            type:'bar',
			            stack: 'sum',
			            itemStyle: {
			                normal: {
			                    color: 'rgba(135,206,250,0.2)',
			                    barBorderColor: '#87cefa',
			                    barBorderWidth: 0,
			                    barBorderRadius:0,
			                    label : {
			                        show: true, 
			                        position: 'inside',
			                        formatter: function (param) {
			                            if(param.value==0){
			                                return '';
			                            }
			                            return '缺口:\n'+param.value+'万元';
			                        },
			                        textStyle: {
			                            color: 'tomato'
			                        }
			                    }
			                }
			            },
			            data:[0, 11]
			        }
			    ]
			},
            pieOptions:{
			    title : {
			        text: '用户访问来源',
			        x:'center'
			    },
			    animation:true,
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient : 'vertical',
			        x : 'left',
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series : [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius : '60%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ]
			        }
			    ]
			},
            doughnutOptions:{
            	title : {
            		text: '用户访问来源',
            		x:'center'
            	},
            	animation:true,
            	tooltip : {
            		trigger: 'item',
            		formatter: "{a} <br/>{b} : {c} ({d}%)"
            	},
            	legend: {
            		orient : 'vertical',
            		x : 'left',
            		data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            	},
            	series : [
            	{
            		name:'访问来源',
            		type:'pie',
            		radius : ['40%', '60%'],
            		center: ['50%', '60%'],
            		itemStyle : {
            			emphasis : {
            				label : {
            					show : true,
            					position : 'center',
            					textStyle : {
            						fontSize : '20',
            						fontWeight : 'bold'
            					}
            				}
            			}
            		},
            		data:[
            		{value:335, name:'直接访问'},
            		{value:310, name:'邮件营销'},
            		{value:234, name:'联盟广告'},
            		{value:135, name:'视频广告'},
            		{value:1548, name:'搜索引擎'}
            		]
            	}
            	]
            },
            hbarOptions:{
			    title : {
			        text: '世界人口总量'
			    },
			    animation:true,
			    tooltip : {
			        trigger: 'axis'
			    },
			    grid:{
			    	x:35,
			    	y:50,
			    	x2:30,
			    	y2:50,
			    	borderWidth:0
			    },
			    legend: {
			    	x:'right',
			        data:['2011年', '2012年']
			    },
			    xAxis : [
			        {	
			        	axisLabel:{
			        		formatter:function(data){
				        		return data+'万';
				        	}
			        	},
			        	splitLine:{ 
		                	show:false
		          		},
			            type : 'value',
			            boundaryGap : [0, 0.01]
			        }
			    ],
			    yAxis : [
			        {
			            type : 'category',
			            splitLine:{ 
		                	show:false
		          		},
			            data : ['巴西','印尼','美国','印度','中国','世界']
			        }
			    ],
			    series : [
			        {
			            name:'2011年',
			            type:'bar',
			            data:[18203, 23489, 29034, 104970, 131744, 630230]
			        },
			        {
			            name:'2012年',
			            type:'bar',
			            data:[19325, 23438, 31000, 121594, 134141, 681807]
			        }
			    ]
			},
			lineOptions:{
			    title : {
			        text: '气温变化'
			    },
			    animation:true,
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			    	x:'right',
			        data:['最高气温','最低气温']
			    },
			    grid:{
			    	x:40,
			    	y:80,
			    	x2:40,
			    	y2:50,
			    	borderWidth:0
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            splitLine:{ 
		                	show:false
		          		},
			            data : ['周一','周二','周三','周四','周五','周六','周日']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            splitLine:{ 
		                	show:false
		          		},
			            axisLabel : {
			                formatter: '{value} °C'
			            }
			        }
			    ],
			    series : [
			        {
			            name:'最高气温',
			            type:'line',
			            data:[11, 11, 15, 13, 12, 13, 10],
			            markPoint : {
			                data : [
			                    {type : 'max', name: '最大值'},
			                    {type : 'min', name: '最小值'}
			                ]
			            },
			            markLine : {
			                data : [
			                    {type : 'average', name: '平均值'}
			                ]
			            }
			        },
			        {
			            name:'最低气温',
			            type:'line',
			            data:[1, -2, 2, 5, 3, 2, 0],
			            markPoint : {
			                data : [
			                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
			                ]
			            },
			            markLine : {
			                data : [
			                    {type : 'average', name : '平均值'}
			                ]
			            }
			        }
			    ]
			},
			radarOptions:{
				title : {
					text: '预算 vs 开销'
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					orient : 'vertical',
					x : 'right',
					y : 'bottom',
					data:['预算分配','实际开销']
				},
				polar : [
				{
					indicator : [
					{ text: '销售', max: 6000},
					{ text: '管理', max: 16000},
					{ text: '客服', max: 30000},
					{ text: '信息技术', max: 38000},
					{ text: '研发', max: 52000},
					{ text: '市场', max: 25000}
					]
				}
				],
				series : [
				{
					name: '预算 vs 开销',
					type: 'radar',
					data : [
					{
						value : [4300, 10000, 28000, 35000, 50000, 19000],
						name : '预算分配'
					},
					{
						value : [5000, 14000, 28000, 31000, 42000, 21000],
						name : '实际开销'
					}
					]
				}
				]
			},
			areaOptions:{
				title : {
					text: '销售情况'
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					x:'right',
					data:['意向','预购','成交']
				},
				grid:{
			    	x:50,
			    	y:50,
			    	x2:20,
			    	y2:50
			    },
				xAxis : [
				{
					type : 'category',
					boundaryGap : false,
					data : ['周一','周二','周三','周四','周五','周六','周日']
				}
				],
				yAxis : [
				{
					type : 'value'
				}
				],
				series : [
				{
					name:'成交',
					type:'line',
					smooth:true,
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data:[10, 12, 21, 54, 260, 830, 710]
				},
				{
					name:'预购',
					type:'line',
					smooth:true,
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data:[30, 182, 434, 791, 390, 30, 10]
				},
				{
					name:'意向',
					type:'line',
					smooth:true,
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data:[1320, 1132, 601, 234, 120, 90, 20]
				}
				]
			},
			mapOptions:{
			    backgroundColor: '#1b1b1b',
			    color: ['gold','aqua','lime'],
			    title : {
			        text: '模拟迁徙',
			        x:'center',
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: '{b}'
			    },
			    legend: {
			        orient: 'vertical',
			        x:'left',
			        data:['北京 Top10', '上海 Top10', '广州 Top10'],
			        selectedMode: 'single',
			        selected:{
			            '上海 Top10' : false,
			            '广州 Top10' : false
			        },
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    dataRange: {
			        min : 0,
			        max : 100,
			        calculable : true,
			        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
			        textStyle:{
			            color:'#fff'
			        }
			    },
			    series : [
			        {
			            name: '全国',
			            type: 'map',
			            roam: true,
			            hoverable: false,
			            mapType: 'china',
			            itemStyle:{
			                normal:{
			                    borderColor:'rgba(100,149,237,1)',
			                    borderWidth:0.5,
			                    areaStyle:{
			                        color: '#1b1b1b'
			                    }
			                }
			            },
			            data:[],
			            markLine : {
			                smooth:true,
			                symbol: ['none', 'circle'],  
			                symbolSize : 1,
			                itemStyle : {
			                    normal: {
			                        color:'#fff',
			                        borderWidth:1,
			                        borderColor:'rgba(30,144,255,0.5)'
			                    }
			                },
			                data : [
			                    [{name:'北京'},{name:'包头'}],
			                    [{name:'北京'},{name:'北海'}],
			                    [{name:'北京'},{name:'广州'}],
			                    [{name:'北京'},{name:'郑州'}],
			                    [{name:'北京'},{name:'长春'}],
			                    [{name:'北京'},{name:'长治'}],
			                    [{name:'北京'},{name:'重庆'}],
			                    [{name:'北京'},{name:'长沙'}],
			                    [{name:'北京'},{name:'成都'}],
			                    [{name:'北京'},{name:'常州'}],
			                    [{name:'北京'},{name:'丹东'}],
			                    [{name:'北京'},{name:'大连'}],
			                    [{name:'北京'},{name:'东营'}],
			                    [{name:'北京'},{name:'延安'}],
			                    [{name:'北京'},{name:'福州'}],
			                    [{name:'北京'},{name:'海口'}],
			                    [{name:'北京'},{name:'呼和浩特'}],
			                    [{name:'北京'},{name:'合肥'}],
			                    [{name:'北京'},{name:'杭州'}],
			                    [{name:'北京'},{name:'哈尔滨'}],
			                    [{name:'北京'},{name:'舟山'}],
			                    [{name:'北京'},{name:'银川'}],
			                    [{name:'北京'},{name:'衢州'}],
			                    [{name:'北京'},{name:'南昌'}],
			                    [{name:'北京'},{name:'昆明'}],
			                    [{name:'北京'},{name:'贵阳'}],
			                    [{name:'北京'},{name:'兰州'}],
			                    [{name:'北京'},{name:'拉萨'}],
			                    [{name:'北京'},{name:'连云港'}],
			                    [{name:'北京'},{name:'临沂'}],
			                    [{name:'北京'},{name:'柳州'}],
			                    [{name:'北京'},{name:'宁波'}],
			                    [{name:'北京'},{name:'南京'}],
			                    [{name:'北京'},{name:'南宁'}],
			                    [{name:'北京'},{name:'南通'}],
			                    [{name:'北京'},{name:'上海'}],
			                    [{name:'北京'},{name:'沈阳'}],
			                    [{name:'北京'},{name:'西安'}],
			                    [{name:'北京'},{name:'汕头'}],
			                    [{name:'北京'},{name:'深圳'}],
			                    [{name:'北京'},{name:'青岛'}],
			                    [{name:'北京'},{name:'济南'}],
			                    [{name:'北京'},{name:'太原'}],
			                    [{name:'北京'},{name:'乌鲁木齐'}],
			                    [{name:'北京'},{name:'潍坊'}],
			                    [{name:'北京'},{name:'威海'}],
			                    [{name:'北京'},{name:'温州'}],
			                    [{name:'北京'},{name:'武汉'}],
			                    [{name:'北京'},{name:'无锡'}],
			                    [{name:'北京'},{name:'厦门'}],
			                    [{name:'北京'},{name:'西宁'}],
			                    [{name:'北京'},{name:'徐州'}],
			                    [{name:'北京'},{name:'烟台'}],
			                    [{name:'北京'},{name:'盐城'}],
			                    [{name:'北京'},{name:'珠海'}],
			                    [{name:'上海'},{name:'包头'}],
			                    [{name:'上海'},{name:'北海'}],
			                    [{name:'上海'},{name:'广州'}],
			                    [{name:'上海'},{name:'郑州'}],
			                    [{name:'上海'},{name:'长春'}],
			                    [{name:'上海'},{name:'重庆'}],
			                    [{name:'上海'},{name:'长沙'}],
			                    [{name:'上海'},{name:'成都'}],
			                    [{name:'上海'},{name:'丹东'}],
			                    [{name:'上海'},{name:'大连'}],
			                    [{name:'上海'},{name:'福州'}],
			                    [{name:'上海'},{name:'海口'}],
			                    [{name:'上海'},{name:'呼和浩特'}],
			                    [{name:'上海'},{name:'合肥'}],
			                    [{name:'上海'},{name:'哈尔滨'}],
			                    [{name:'上海'},{name:'舟山'}],
			                    [{name:'上海'},{name:'银川'}],
			                    [{name:'上海'},{name:'南昌'}],
			                    [{name:'上海'},{name:'昆明'}],
			                    [{name:'上海'},{name:'贵阳'}],
			                    [{name:'上海'},{name:'兰州'}],
			                    [{name:'上海'},{name:'拉萨'}],
			                    [{name:'上海'},{name:'连云港'}],
			                    [{name:'上海'},{name:'临沂'}],
			                    [{name:'上海'},{name:'柳州'}],
			                    [{name:'上海'},{name:'宁波'}],
			                    [{name:'上海'},{name:'南宁'}],
			                    [{name:'上海'},{name:'北京'}],
			                    [{name:'上海'},{name:'沈阳'}],
			                    [{name:'上海'},{name:'秦皇岛'}],
			                    [{name:'上海'},{name:'西安'}],
			                    [{name:'上海'},{name:'石家庄'}],
			                    [{name:'上海'},{name:'汕头'}],
			                    [{name:'上海'},{name:'深圳'}],
			                    [{name:'上海'},{name:'青岛'}],
			                    [{name:'上海'},{name:'济南'}],
			                    [{name:'上海'},{name:'天津'}],
			                    [{name:'上海'},{name:'太原'}],
			                    [{name:'上海'},{name:'乌鲁木齐'}],
			                    [{name:'上海'},{name:'潍坊'}],
			                    [{name:'上海'},{name:'威海'}],
			                    [{name:'上海'},{name:'温州'}],
			                    [{name:'上海'},{name:'武汉'}],
			                    [{name:'上海'},{name:'厦门'}],
			                    [{name:'上海'},{name:'西宁'}],
			                    [{name:'上海'},{name:'徐州'}],
			                    [{name:'上海'},{name:'烟台'}],
			                    [{name:'上海'},{name:'珠海'}],
			                    [{name:'广州'},{name:'北海'}],
			                    [{name:'广州'},{name:'郑州'}],
			                    [{name:'广州'},{name:'长春'}],
			                    [{name:'广州'},{name:'重庆'}],
			                    [{name:'广州'},{name:'长沙'}],
			                    [{name:'广州'},{name:'成都'}],
			                    [{name:'广州'},{name:'常州'}],
			                    [{name:'广州'},{name:'大连'}],
			                    [{name:'广州'},{name:'福州'}],
			                    [{name:'广州'},{name:'海口'}],
			                    [{name:'广州'},{name:'呼和浩特'}],
			                    [{name:'广州'},{name:'合肥'}],
			                    [{name:'广州'},{name:'杭州'}],
			                    [{name:'广州'},{name:'哈尔滨'}],
			                    [{name:'广州'},{name:'舟山'}],
			                    [{name:'广州'},{name:'银川'}],
			                    [{name:'广州'},{name:'南昌'}],
			                    [{name:'广州'},{name:'昆明'}],
			                    [{name:'广州'},{name:'贵阳'}],
			                    [{name:'广州'},{name:'兰州'}],
			                    [{name:'广州'},{name:'拉萨'}],
			                    [{name:'广州'},{name:'连云港'}],
			                    [{name:'广州'},{name:'临沂'}],
			                    [{name:'广州'},{name:'柳州'}],
			                    [{name:'广州'},{name:'宁波'}],
			                    [{name:'广州'},{name:'南京'}],
			                    [{name:'广州'},{name:'南宁'}],
			                    [{name:'广州'},{name:'南通'}],
			                    [{name:'广州'},{name:'北京'}],
			                    [{name:'广州'},{name:'上海'}],
			                    [{name:'广州'},{name:'沈阳'}],
			                    [{name:'广州'},{name:'西安'}],
			                    [{name:'广州'},{name:'石家庄'}],
			                    [{name:'广州'},{name:'汕头'}],
			                    [{name:'广州'},{name:'青岛'}],
			                    [{name:'广州'},{name:'济南'}],
			                    [{name:'广州'},{name:'天津'}],
			                    [{name:'广州'},{name:'太原'}],
			                    [{name:'广州'},{name:'乌鲁木齐'}],
			                    [{name:'广州'},{name:'温州'}],
			                    [{name:'广州'},{name:'武汉'}],
			                    [{name:'广州'},{name:'无锡'}],
			                    [{name:'广州'},{name:'厦门'}],
			                    [{name:'广州'},{name:'西宁'}],
			                    [{name:'广州'},{name:'徐州'}],
			                    [{name:'广州'},{name:'烟台'}],
			                    [{name:'广州'},{name:'盐城'}]
			                ],
			            },
			            geoCoord: {
			                '上海': [121.4648,31.2891],
			                '东莞': [113.8953,22.901],
			                '东营': [118.7073,37.5513],
			                '中山': [113.4229,22.478],
			                '临汾': [111.4783,36.1615],
			                '临沂': [118.3118,35.2936],
			                '丹东': [124.541,40.4242],
			                '丽水': [119.5642,28.1854],
			                '乌鲁木齐': [87.9236,43.5883],
			                '佛山': [112.8955,23.1097],
			                '保定': [115.0488,39.0948],
			                '兰州': [103.5901,36.3043],
			                '包头': [110.3467,41.4899],
			                '北京': [116.4551,40.2539],
			                '北海': [109.314,21.6211],
			                '南京': [118.8062,31.9208],
			                '南宁': [108.479,23.1152],
			                '南昌': [116.0046,28.6633],
			                '南通': [121.1023,32.1625],
			                '厦门': [118.1689,24.6478],
			                '台州': [121.1353,28.6688],
			                '合肥': [117.29,32.0581],
			                '呼和浩特': [111.4124,40.4901],
			                '咸阳': [108.4131,34.8706],
			                '哈尔滨': [127.9688,45.368],
			                '唐山': [118.4766,39.6826],
			                '嘉兴': [120.9155,30.6354],
			                '大同': [113.7854,39.8035],
			                '大连': [122.2229,39.4409],
			                '天津': [117.4219,39.4189],
			                '太原': [112.3352,37.9413],
			                '威海': [121.9482,37.1393],
			                '宁波': [121.5967,29.6466],
			                '宝鸡': [107.1826,34.3433],
			                '宿迁': [118.5535,33.7775],
			                '常州': [119.4543,31.5582],
			                '广州': [113.5107,23.2196],
			                '廊坊': [116.521,39.0509],
			                '延安': [109.1052,36.4252],
			                '张家口': [115.1477,40.8527],
			                '徐州': [117.5208,34.3268],
			                '德州': [116.6858,37.2107],
			                '惠州': [114.6204,23.1647],
			                '成都': [103.9526,30.7617],
			                '扬州': [119.4653,32.8162],
			                '承德': [117.5757,41.4075],
			                '拉萨': [91.1865,30.1465],
			                '无锡': [120.3442,31.5527],
			                '日照': [119.2786,35.5023],
			                '昆明': [102.9199,25.4663],
			                '杭州': [119.5313,29.8773],
			                '枣庄': [117.323,34.8926],
			                '柳州': [109.3799,24.9774],
			                '株洲': [113.5327,27.0319],
			                '武汉': [114.3896,30.6628],
			                '汕头': [117.1692,23.3405],
			                '江门': [112.6318,22.1484],
			                '沈阳': [123.1238,42.1216],
			                '沧州': [116.8286,38.2104],
			                '河源': [114.917,23.9722],
			                '泉州': [118.3228,25.1147],
			                '泰安': [117.0264,36.0516],
			                '泰州': [120.0586,32.5525],
			                '济南': [117.1582,36.8701],
			                '济宁': [116.8286,35.3375],
			                '海口': [110.3893,19.8516],
			                '淄博': [118.0371,36.6064],
			                '淮安': [118.927,33.4039],
			                '深圳': [114.5435,22.5439],
			                '清远': [112.9175,24.3292],
			                '温州': [120.498,27.8119],
			                '渭南': [109.7864,35.0299],
			                '湖州': [119.8608,30.7782],
			                '湘潭': [112.5439,27.7075],
			                '滨州': [117.8174,37.4963],
			                '潍坊': [119.0918,36.524],
			                '烟台': [120.7397,37.5128],
			                '玉溪': [101.9312,23.8898],
			                '珠海': [113.7305,22.1155],
			                '盐城': [120.2234,33.5577],
			                '盘锦': [121.9482,41.0449],
			                '石家庄': [114.4995,38.1006],
			                '福州': [119.4543,25.9222],
			                '秦皇岛': [119.2126,40.0232],
			                '绍兴': [120.564,29.7565],
			                '聊城': [115.9167,36.4032],
			                '肇庆': [112.1265,23.5822],
			                '舟山': [122.2559,30.2234],
			                '苏州': [120.6519,31.3989],
			                '莱芜': [117.6526,36.2714],
			                '菏泽': [115.6201,35.2057],
			                '营口': [122.4316,40.4297],
			                '葫芦岛': [120.1575,40.578],
			                '衡水': [115.8838,37.7161],
			                '衢州': [118.6853,28.8666],
			                '西宁': [101.4038,36.8207],
			                '西安': [109.1162,34.2004],
			                '贵阳': [106.6992,26.7682],
			                '连云港': [119.1248,34.552],
			                '邢台': [114.8071,37.2821],
			                '邯郸': [114.4775,36.535],
			                '郑州': [113.4668,34.6234],
			                '鄂尔多斯': [108.9734,39.2487],
			                '重庆': [107.7539,30.1904],
			                '金华': [120.0037,29.1028],
			                '铜川': [109.0393,35.1947],
			                '银川': [106.3586,38.1775],
			                '镇江': [119.4763,31.9702],
			                '长春': [125.8154,44.2584],
			                '长沙': [113.0823,28.2568],
			                '长治': [112.8625,36.4746],
			                '阳泉': [113.4778,38.0951],
			                '青岛': [120.4651,36.3373],
			                '韶关': [113.7964,24.7028]
			            }
			        },
			        {
			            name: '北京 Top10',
			            type: 'map',
			            mapType: 'china',
			            data:[],
			            markLine : {
			                smooth:true,
			                effect : {
			                    show: true,
			                    scaleSize: 1,
			                    period: 30,
			                    color: '#fff',
			                    shadowBlur: 10
			                },
			                itemStyle : {
			                    normal: {
			                        borderWidth:1,
			                        lineStyle: {
			                            type: 'solid',
			                            shadowBlur: 10
			                        }
			                    }
			                },
			                data : [
			                    [{name:'北京'}, {name:'上海',value:95}],
			                    [{name:'北京'}, {name:'广州',value:90}],
			                    [{name:'北京'}, {name:'大连',value:80}],
			                    [{name:'北京'}, {name:'南宁',value:70}],
			                    [{name:'北京'}, {name:'南昌',value:60}],
			                    [{name:'北京'}, {name:'拉萨',value:50}],
			                    [{name:'北京'}, {name:'长春',value:40}],
			                    [{name:'北京'}, {name:'包头',value:30}],
			                    [{name:'北京'}, {name:'重庆',value:20}],
			                    [{name:'北京'}, {name:'常州',value:10}]
			                ]
			            },
			            markPoint : {
			                symbol:'emptyCircle',
			                symbolSize : function (v){
			                    return 10 + v/10
			                },
			                effect : {
			                    show: true,
			                    shadowBlur : 0
			                },
			                itemStyle:{
			                    normal:{
			                        label:{show:false}
			                    },
			                    emphasis: {
			                        label:{position:'top'}
			                    }
			                },
			                data : [
			                    {name:'上海',value:95},
			                    {name:'广州',value:90},
			                    {name:'大连',value:80},
			                    {name:'南宁',value:70},
			                    {name:'南昌',value:60},
			                    {name:'拉萨',value:50},
			                    {name:'长春',value:40},
			                    {name:'包头',value:30},
			                    {name:'重庆',value:20},
			                    {name:'常州',value:10}
			                ]
			            }
			        },
			        {
			            name: '上海 Top10',
			            type: 'map',
			            mapType: 'china',
			            data:[],
			            markLine : {
			                smooth:true,
			                effect : {
			                    show: true,
			                    scaleSize: 1,
			                    period: 30,
			                    color: '#fff',
			                    shadowBlur: 10
			                },
			                itemStyle : {
			                    normal: {
			                        borderWidth:1,
			                        lineStyle: {
			                            type: 'solid',
			                            shadowBlur: 10
			                        }
			                    }
			                },
			                data : [
			                    [{name:'上海'},{name:'包头',value:95}],
			                    [{name:'上海'},{name:'昆明',value:90}],
			                    [{name:'上海'},{name:'广州',value:80}],
			                    [{name:'上海'},{name:'郑州',value:70}],
			                    [{name:'上海'},{name:'长春',value:60}],
			                    [{name:'上海'},{name:'重庆',value:50}],
			                    [{name:'上海'},{name:'长沙',value:40}],
			                    [{name:'上海'},{name:'北京',value:30}],
			                    [{name:'上海'},{name:'丹东',value:20}],
			                    [{name:'上海'},{name:'大连',value:10}]
			                ]
			            },
			            markPoint : {
			                symbol:'emptyCircle',
			                symbolSize : function (v){
			                    return 10 + v/10
			                },
			                effect : {
			                    show: true,
			                    shadowBlur : 0
			                },
			                itemStyle:{
			                    normal:{
			                        label:{show:false}
			                    },
			                    emphasis: {
			                        label:{position:'top'}
			                    }
			                },
			                data : [
			                    {name:'包头',value:95},
			                    {name:'昆明',value:90},
			                    {name:'广州',value:80},
			                    {name:'郑州',value:70},
			                    {name:'长春',value:60},
			                    {name:'重庆',value:50},
			                    {name:'长沙',value:40},
			                    {name:'北京',value:30},
			                    {name:'丹东',value:20},
			                    {name:'大连',value:10}
			                ]
			            }
			        },
			        {
			            name: '广州 Top10',
			            type: 'map',
			            mapType: 'china',
			            data:[],
			            markLine : {
			                smooth:true,
			                effect : {
			                    show: true,
			                    scaleSize: 1,
			                    period: 30,
			                    color: '#fff',
			                    shadowBlur: 10
			                },
			                itemStyle : {
			                    normal: {
			                        borderWidth:1,
			                        lineStyle: {
			                            type: 'solid',
			                            shadowBlur: 10
			                        }
			                    }
			                },
			                data : [
			                    [{name:'广州'},{name:'福州',value:95}],
			                    [{name:'广州'},{name:'太原',value:90}],
			                    [{name:'广州'},{name:'长春',value:80}],
			                    [{name:'广州'},{name:'重庆',value:70}],
			                    [{name:'广州'},{name:'西安',value:60}],
			                    [{name:'广州'},{name:'成都',value:50}],
			                    [{name:'广州'},{name:'常州',value:40}],
			                    [{name:'广州'},{name:'北京',value:30}],
			                    [{name:'广州'},{name:'北海',value:20}],
			                    [{name:'广州'},{name:'海口',value:10}]
			                ]
			            },
			            markPoint : {
			                symbol:'emptyCircle',
			                symbolSize : function (v){
			                    return 10 + v/10
			                },
			                effect : {
			                    show: true,
			                    shadowBlur : 0
			                },
			                itemStyle:{
			                    normal:{
			                        label:{show:false}
			                    },
			                    emphasis: {
			                        label:{position:'top'}
			                    }
			                },
			                data : [
			                    {name:'福州',value:95},
			                    {name:'太原',value:90},
			                    {name:'长春',value:80},
			                    {name:'重庆',value:70},
			                    {name:'西安',value:60},
			                    {name:'成都',value:50},
			                    {name:'常州',value:40},
			                    {name:'北京',value:30},
			                    {name:'北海',value:20},
			                    {name:'海口',value:10}
			                ]
			            }
			        }
			    ]
			},
			gaugeOptions:{
        		title : {
					text: '业绩完成率',
					x:'center'
				},
        		tooltip : {
        			formatter: "{a} <br/>{b} : {c}%"
        		},
        		series : [
        		{
        			name:'业务指标',
        			type:'gauge',
        			detail : {formatter:'{value}%'},
        			data:[{value: (Math.random()*100).toFixed(2) - 0, name: '完成率'}]
        		}
        		]
        	},
			funnelOptions:{
			    color : [
			        'rgba(255, 69, 0, 0.5)',
			        'rgba(255, 150, 0, 0.5)',
			        'rgba(255, 200, 0, 0.5)',
			        'rgba(155, 200, 50, 0.5)',
			        'rgba(55, 200, 100, 0.5)'
			    ],
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    legend: {
			        data : ['展现','点击','访问','咨询','订单']
			    },
			    series : [
			        {
			            name:'预期',
			            type:'funnel',
			            x: '10%',
			            width: '80%',
			            itemStyle: {
			                normal: {
			                    label: {
			                        formatter: '{b}预期'
			                    },
			                    labelLine: {
			                        show : false
			                    }
			                },
			                emphasis: {
			                    label: {
			                        position:'inside',
			                        formatter: '{b}预期 : {c}%'
			                    }
			                }
			            },
			            data:[
			                {value:60, name:'访问'},
			                {value:40, name:'咨询'},
			                {value:20, name:'订单'},
			                {value:80, name:'点击'},
			                {value:100, name:'展现'}
			            ]
			        },
			        {
			            name:'实际',
			            type:'funnel',
			            x: '10%',
			            width: '80%',
			            maxSize: '80%',
			            itemStyle: {
			                normal: {
			                    borderColor: '#fff',
			                    borderWidth: 2,
			                    label: {
			                        position: 'inside',
			                        formatter: '{c}%',
			                        textStyle: {
			                            color: '#fff'
			                        }
			                    }
			                },
			                emphasis: {
			                    label: {
			                        position:'inside',
			                        formatter: '{b}实际 : {c}%'
			                    }
			                }
			            },
			            data:[
			                {value:30, name:'访问'},
			                {value:10, name:'咨询'},
			                {value:5, name:'订单'},
			                {value:50, name:'点击'},
			                {value:80, name:'展现'}
			            ]
			        }
			    ]
			}
        };

        var timeTicket;
        utils.$interval.cancel(timeTicket);
        timeTicket = utils.$interval(function (){
        	if($scope.vo.gaugeOptions){
        		$scope.vo.gaugeOptions = {
	        		title : {
						text: '业绩完成率',
						x:'center'
					},
	        		tooltip : {
	        			formatter: "{a} <br/>{b} : {c}%"
	        		},
	        		series : [
	        		{
	        			name:'业务指标',
	        			type:'gauge',
	        			detail : {formatter:'{value}%'},
	        			data:[{value: (Math.random()*100).toFixed(2) - 0, name: '完成率'}]
	        		}
	        		]
	        	};
        	}
        },1000);

        var array = ['fyceOptions','ybfyOptions','barOptions','hbarOptions','lineOptions','pieOptions','doughnutOptions','radarOptions','areaOptions','gaugeOptions','funnelOptions','mapOptions'],i=0;

        utils.$timeout(function(){
        	var optionInterval = utils.$interval(function(){
        		if($rootScope.state.name == 'chart'){
	                utils.$timeout(function(){
	                	$scope.vo.options = options[array[i]];
	                	i++;
	                },1000);
					if(i==array.length){
						utils.$interval.cancel(optionInterval);
					}
        		}else{
        			utils.$interval.cancel(optionInterval);
        		}
			},3000);
        },1000);
        
        $scope.vc = {
            
        };
    })();

    

    (function initProcess() {
        utils.$timeout(function(){
            utils.$ocLazyLoad.load([
                'echarts'
            ]).then(function(){
                utils.$compile($('chart'))($scope);
            });
        },100);
    })();
}]);