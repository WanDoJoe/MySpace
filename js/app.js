
app.controller('indexController', ['$scope','routerTempUrlHelpProvider', function($scope,help){
		// console.log(help.baseUrl("sssss"))
		$scope.baseUrl=function(url){
			help.baseUrl(url);
		}
	
}])

