angular.module('utils.format',[]).factory('format',['$rootScope',function($rootScope){
	var formatUtils = {
		toJSON:function(obj){
			return JSON.stringify(obj);
		},
		fillZero:function(num){
			return num<10?'0'+num:''+num;
		},
		formatDate:function(date,format){
			format = format || 'yyyy-MM-dd';
			format = format.replace('yyyy',date.getFullYear());
			format = format.replace('MM',formatUtils.fillZero(date.getMonth()+1));
			format = format.replace('dd',formatUtils.fillZero(date.getDate()));
			format = format.replace('HH',formatUtils.fillZero(date.getHours()));
			format = format.replace('mm',formatUtils.fillZero(date.getMinutes()));
			format = format.replace('ss',formatUtils.fillZero(date.getSeconds()));
			return format;
		},
		parseDate:function(dateText,format){
			format = format || 'yyyy-MM-dd';
			var date = new Date();

			var yearIndex = format.indexOf('yyyy');
			var year = parseInt(dateText.substr(yearIndex,4),10);
			date.setFullYear(year);
			var monthIndex = format.indexOf('MM');
			var month = parseInt(dateText.substr(monthIndex,2),10)-1;
			date.setMonth(month);
			var dayIndex = format.indexOf('dd');
			var day = parseInt(dateText.substr(dayIndex,2),10);
			date.setDate(day);
			var hourIndex = format.indexOf('HH');
			var hour = parseInt(dateText.substr(hourIndex,2),10);
			date.setHours(hour);
			var minuteIndex = format.indexOf('mm');
			var minute = parseInt(dateText.substr(minuteIndex,2),10);
			date.setMinutes(minute);
			var secondIndex = format.indexOf('ss');
			var second = parseInt(dateText.substr(secondIndex,4),10);
			date.setSeconds(second);
			
			return date;
		}
	};

	return formatUtils;
}]);