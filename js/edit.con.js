var project = angular.module ('project');

project.controller('editCtrl', function($scope, $location, $routeParams) {
 var items;
 var id;
 function setItem() {
     id = $routeParams.id;
     items = JSON.parse(localStorage.getItem('items'));
     if(id) {
         angular.forEach(items, function (item, key) {
         if(item.id == id) {
             $scope.item = item;
         }
       });
     }
 }

 $scope.updateItem = function() {
   items[id] = $scope.item;
   localStorage.setItem('items', JSON.stringify(items));
   $location.path('/vehicle');
 }
 setItem();
});
