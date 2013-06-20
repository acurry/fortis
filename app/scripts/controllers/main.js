'use strict';

angular.module('fortisApp')
  .controller('MainCtrl', function ($scope) {
    $scope.fitnessTypes = [
      'crossfit',
      'running',
      'weightlifting'
    ];
  });
