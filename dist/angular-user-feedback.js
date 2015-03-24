/**************************************************************************
* AngularJS-ng-feedback, v0.0.9; MIT License;
* Author: Ankit Jain
**************************************************************************/
(function(){

    'use strict';

    angular.module('angular-user-feedback', ['ui.bootstrap'])
    .constant('feedbackConstants', {
      position: 'right-center',
      uiLabel: 'Provide Feedback'
    })    
    .directive('feedback', ['$compile', function ($compile) {
      return  {
        restrict: 'EA',
        replace: false,
        scope: {
          uiLabel: '=uiLabel',
          position: '=position'
        },
        template: '<div ng-class="elementPosition" ng-click="popupFeedback()" class="feedback-link">' +
                  '{{displayText}}</div>',
        controller: ['$scope', '$element', '$attrs', '$modal', '$timeout', 'feedbackConstants', function ($scope, $element, $attrs, $modal, $timeout, feedbackConstants) {
          if(!$scope.position) {
            $scope.elementPosition = feedbackConstants.position;
          } else {
            $scope.elementPosition = $scope.position;
          }
          if(!$scope.uiLabel) {
            $scope.displayText = feedbackConstants.uiLabel;
          } else {
            $scope.elementPosition = $scope.uiLabel;
          }

          $scope.popupFeedback = function() {
            $scope.payload = {
              data: {displayText: $scope.displayText},
              config: {}
            }
            var modalInstance = $modal.open({
              template: '<div class = "modal-header">' + 
                'Provide Feedback </div>' + 
                '<div class = "feedback-panel modal-body">' + 
                '<div class="panel panel-default">' + 
                  '<div class="panel-header"> {{displayText}} </div>' + 
                  '<div class="panel-body">' + 
                  '<form name="feedbackForm">' + 
                    '<div class="form-inline" style="padding:5px">' + 
                        '<label for="UserNamelabel">Name: </label>' + 
                        '<input type="text" class="form-control" ng-model="name" required placeholder="Username"/><br />' + 
                    '</div>' + 
                    '<div class="form-inline">' + 
                        '<label for="Emaillabel">E-mail:</label>' + 
                        '<input type="email" class="form-control" ng-model="email" required placeholder="example@example.com"/><br />' + 
                      '</div>' + 
                      '<div class="form-group" >' + 
                        '<label for="Commentlabel">Comment: </label>' + 
                        '<textarea type="text" class="form-control" ng-model="comment" / rows=3></textarea><br/>' + 
                    '</div>' + 
                    '<div class="checkbox ">' + 
                      '<label>' + 
                        '<input type="checkbox" ng-model="showscreenshot"  ng-click="info()">' + 
                          'Click to automatically attach a screenshot of this page' + 
                          
                      '</label>' + 
                    '</div>' + 
                    '<div id="screenshot"  style="cursor:pointer;" ng-hide="!showscreenshot">' + 
                            '<div><a  data-toggle="modal"  data-target="#imageModal"  >' + 
                             '<img src="{{imageData}}" alt="loading..." height="100" width="450" /> </a></div>' + 
                    '</div>' + 
                    '<div class="form-group">' + 
                      '<label for="ratelabel">Rate Us:</label>   ' + 
                      '<rating ng-model="rate" max="max" on-hover="hoveringOver(value)" on-leave="overStar = null" state-on="\'glyphicon-ok-sign\'" state-off="\'glyphicon-ok-circle\'" ></rating>' + 
                      '<span class="label" ng-class="{\'label-warning\': rate<3, \'label-info\': rate>=3 && rate<7, \'label-success\': rate>=7}" >{{rate}}/{{max}}</span>' + 
                      '<button ng-click="cancel()" class="btn btn-sm btn-danger pull-right">Cancel</button>' + 
                      '<button type="submit" ng-click="ok()" ng-disabled=" !showscreenshot || feedbackForm.$invalid " class="btn btn-sm btn-primary pull-right">Submit</button>' + 
                    '</div>' + 
                  '</form> ' + 
                  '</div>' + 
                '</div>' + 
              '</div>' + 
              '<div class = "modal-footer"> </div>'

              ,
              controller: 'FeedBackModalCtrl',
              size: 'lg',
              resolve: {
                payload: function() {
                  return $scope.payload;
                }
              }
            });

            modalInstance.result.then(function() {
              //TODO: checks what needs to be in there.
            }, function() {});            
          }
        }]
      };
    }])
    .controller('FeedBackModalCtrl', function($scope, $modalInstance, payload) {

      $scope.rate = 1;
      $scope.max = 10;
      $scope.displayText = payload.data.displayText;
      $scope.hoveringOver = function(value)  {
          $scope.overStar = value;
          $scope.rate = value;
      };  
      html2canvas(document.body, {
        onrendered: function(canvas) {
          var data =  canvas.toDataURL();
          $scope.imageData= data;
        }
      });
      $scope.submit = function() {
     };
      $scope.name=$scope.userName;
      $scope.email=$scope.userEmail;
      $scope.ok = function() {
        $modalInstance.close();
      };

      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };

    });

})();



