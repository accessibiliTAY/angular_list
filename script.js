var app = angular.module('messageApp', []);

app.controller('MainController', ['$scope', function($scope){
//var vm = this;
$scope.message= '';
$scope.messages = [];
$scope.secList = [];
$scope.index = 0;

var moveList = function(){
  if ($scope.index > 0){
    $scope.secList.push($scope.message);
      console.log('THE INDEX IS MORE THAN 0')
      $scope.message = '';
    };
    return $scope.secList;
}

$scope.postMessage = function(){
  console.log('button pushed');
  $scope.messages.push($scope.message);
  $scope.message='';
  $scope.showMess = true;
};
moveList();
}]);

// Cannot get the controlllerAs to work in my project. Switched back to $scope to return functionality.
//
// var app = angular.module('messageApp', []);
//
// app.controller('MainController',  function(){
// var vm = this;
// vm.message= '';
// vm.messages = [];
// vm.$index = 0;
//
// vm.postMessage = function(){
//   console.log('button pushed');
//   vm.messages.push(vm.message);
//   vm.message='';
//   vm.showMess = true;
// vm.addMess = function(){
//   if (i = 0, i > 0, i++){
//
//       console.log('THE INDEX IS MORE THAN 0')
//
//   };
// };
// }
// })
