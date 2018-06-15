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
			//blog router 
			.state("blog",{ //app
				url:"/blogapp",
                // abstract:true,
				templateUrl:"app/view/blogApp.html"//helpBase.baseUrl("home.html")
			})
			.state("blog.home",{ //app
				url:"/blog",
				templateUrl:"app/view/blog.html"//helpBase.baseUrl("home.html")
			})
			.state("blog.editor",{
                url:"/edit",
                templateUrl:"app/view/blogeditor.html"//helpBase.baseUrl("home.html")
			})
            .state("blog.detail",{
                url:"/detail",
                templateUrl:"app/view/blogDetail.html"//helpBase.baseUrl("home.html")
            })

			//photo router
			.state("app.photo",{
				url:"/photo",
				templateUrl:"app/view/photo.html"//helpBase.baseUrl("home.html")
			})

			//about router
            .state("app.aboutme",{
                url:"/aboutme",
                templateUrl:"app/view/aboutme.html"//helpBase.baseUrl("home.html")
            })


			;
	
}]);