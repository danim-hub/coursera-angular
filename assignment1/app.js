(function() {
  'use strict';
  angular.module("LunchCheck",[]).
  controller("LunchCheckController", function ($scope) {
    var vm=this;
    $scope.items='';
    $scope.message='';
    $scope.checkIfTooMuch=function(){
      $scope.message = vm.checkItems($scope.items);
    }
    vm.checkItems=function (s) {
      if (s.length==0) {
        return 'Please enter data first' ;
      }
      var sz=s.split(',').length;
      return sz <= 3 ? 'Enjoy!' :
                       'Too much!';
    }
  })
}());
