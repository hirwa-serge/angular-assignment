(function () {
  'use strict';

  angular.module("LunchCheck", [])//ng-app set

  .controller("LunchCheckController", Lunch);//ng-controller set

  Lunch.$inject= ['$scope'];
  function Lunch($scope) {
  $scope.items =" ";
  $scope.checkiftoomuch = function() {
  // Perform the split operation
  var resultArray = $scope.items.split(" ");

  // Generate the message based on the number of items
  $scope.message = generateMessage(resultArray);
};

function generateMessage(items) {
  if ($scope.items.trim() === '') {
    return "please enter data first.";
  } else if (items.length === 0) {
    return "Please enter data first.";
  } else if (items.length <= 3) {
    return "Enjoy.";
  } else {
    return "Too much.";
  }
}
 };
})();
