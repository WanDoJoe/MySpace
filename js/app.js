
app.controller('indexController', ['$scope','routerTempUrlHelpProvider', function($scope,help){
		// console.log(help.baseUrl("sssss"))
		$scope.baseUrl=function(url){
			help.baseUrl(url);
		}
	
}])




app.constructor("blogController",['$rootScope','$scope','$http',function ($rootScope, $scope,$http) {




}])



app.controller('blogeditorController', ['$scope','$ocLazyLoad', 
	function($scope,$ocLazyLoad){
		console.log('blogeditorController');
		 $ocLazyLoad.load('js/blogeditor.js');

		 $ocLazyLoad.load('app/libs/ckeditor/config.js');
		 $ocLazyLoad.load('app/libs/ckeditor/skins/moono-lisa/skin.js');
		 $ocLazyLoad.load('app/libs/ckeditor/lang/zh-cn.js');

		 console.log('blogeditorController2');
	
}])