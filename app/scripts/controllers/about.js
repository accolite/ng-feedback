'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTestApp
 */

  angularTestApp.controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.number = 10;
    
  	$scope.user= {
  		name: 'raviteja',
  		email: 'ravi@gmail.com'
  	};
  })
  
  ;
