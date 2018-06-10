app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
	// 'routerTempUrlHelpProvider',
	function($stateProvider,$locationProvider,$urlRouterProvider
		// ,helpBase
		) {

		$urlRouterProvider.otherwise('/app/home');

		//Application Router
		$stateProvider

			.state("app",{
				url:"/app",
				abstract:true,
				templateUrl:"app/view/app.html"//helpBase.baseUrl("app.html")
			})
			.state("app.home",{
				url:"/home",
				templateUrl:"app/view/home.html"//helpBase.baseUrl("home.html")
			})
			.state("app.blog",{
				url:"/blog",
				templateUrl:"app/view/blog.html"//helpBase.baseUrl("home.html")
			})
			.state("app.photo",{
				url:"/photo",
				templateUrl:"app/view/photo.html"//helpBase.baseUrl("home.html")
			})



			;
	
}]);