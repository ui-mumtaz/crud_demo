var project = angular.module ('project');

project.controller('vechileCtrl', function($scope, $location) {

	if(localStorage.getItem('items')) {
		$scope.items = JSON.parse(localStorage.getItem('items'));
	}
	
	$scope.addItem = function(item) {
		$scope.items.push(item);
		$scope.item = {};
 	}

	$scope.removeItem = function(index) {
		$scope.items.splice(index,1);
		localStorage.setItem('items', $scope.items);
 	}

	$scope.editItem = function(id) {
		$location.path('/edit/' + id);
	}

});
