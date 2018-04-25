angular.module('app')
.filter('pageStartFrom',[function(){
	return function(input,start){//两个参数(所有数据，从什么时候开始下一页的数据)
		start = +start; //获取每次翻到的页面的数据上限
		return input.slice(start);//从什么位置开始截取数据
	}
}])