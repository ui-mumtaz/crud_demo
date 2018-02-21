var project = angular.module ('project');

project.controller('createCtrl', function($scope, $location) {

 $scope.item = {action: 'pending'};
 $scope.isSubmitted = false;

 if(!$scope.items) {
   $scope.items = [];
 }

 $scope.addItem = function() {
   if ($scope.myForm.$valid) {
       console.log($scope.item.vName + " added to the database.");
   } else {
       $scope.isSubmitted = true;
   }


      if(localStorage.getItem('items')) {
        $scope.items = JSON.parse(localStorage.getItem('items'));
      } else {
        $scope.items = [];
      }
      $scope.item.id = $scope.items.length;
      $scope.items.push($scope.item);

  		localStorage.setItem('items', JSON.stringify($scope.items));
      $location.path('/vehicle');
  }
});
