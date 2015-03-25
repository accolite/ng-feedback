'use strict';

 angularTestApp.directive('ngFeedback', 
      function factory() {
        var directiveDefinitionObject = {
        restrict: 'EA',
        templateUrl: '../templates/hello.html',      
        replace: true,
        scope: {
            userName : '=',
            userEmail: '=',
            postUrl: '='
        },
        controller: ['$scope', '$modal',  function($scope,$modal){
                
                html2canvas(document.body, {
                  onrendered: function(canvas) {
                    var data =  canvas.toDataURL();
                    $scope.imageData= data;
                    }
            });                 
        }],
        link: function(scope,attrs,ctrl) {            
                scope.rate = 1;
                scope.max = 10;
            scope.hoveringOver = function(value)  {
                scope.overStar = value;
                scope.rate = value;
            };  

            scope.submit = function() {
                    console.log(scope);

                 };
            scope.name=scope.userName;
            scope.email=scope.userEmail;

        }
    };
        return directiveDefinitionObject;
});