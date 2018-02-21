angular.module ('project').config(function($routeProvider) {
   		$routeProvider.when ('/create', {
				templateUrl :'views/create.html',
				controller: 'createCtrl'
			})

			.when ('/vehicle', {
				templateUrl :'views/vehicle.html',
				controller: 'vechileCtrl'
			})

			.when ('/edit/:id' , {
				templateUrl :'views/edit.html' ,
				controller: 'editCtrl'
			})
			.otherwise({redirectTo  :'/vehicle'});
});
