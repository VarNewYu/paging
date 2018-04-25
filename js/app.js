angular.module('app',[])
.controller('appCtrl',['$scope',function($scope){
	$scope.dataList = [];
	for(var i=0; i<25;i++){
		var data = {};
		data.id = i;
		$scope.dataList.push(data);
	};
	$scope.pageSize = 10; //每页需要显示的内容条数
	$scope.curPage = 0; //首页
	$scope.pageCount = Math.ceil($scope.dataList.length / $scope.pageSize) - 1; //当前页
	//总页数 = 列表的总条数/页面要显示的条数 - 1
}])