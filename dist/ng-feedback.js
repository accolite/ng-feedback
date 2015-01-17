/**************************************************************************
 * AngularJS-ng-error-logger, v0.0.9; MIT License;
 * Author: Avinash V, Ravi Teja
 **************************************************************************/
(function() {

  'use strict';

  angular.module('ng-feedback', [])
    .provider(
      'feedbackProvider',
      function() {
        this.config = {};
        this.config.feedbackUrl = './api/logHttpErrors';
        this.config.feedbackEnabled = false;
        this.initializeConfig = function(feedbackUrl, feedbackEnabled) {
          this.config.feedbackUrl = feedbackUrl;
          this.config.feedbackEnabled = feedbackEnabled;
        }
        this.setFeedbackUrl = function(url) {
          this.config.feedbackUrl = url;
        }
        this.setFeedbackEnabled = function(status) {
          this.config.feedbackEnabled = status;
        }        
        this.isFeedbackEnabled = function(status) {
          return this.config.feedbackEnabled;
        }
        this.$get = function() {
          return (this);
        }
      }
    )
    .factory(
      'feedbackService',
      function($log, $window) {
        // Return the logging function.
        return {

        };
      }
    )
    // register the interceptor as a service
    .factory('angularFeedback', function($q, $cookieStore) {
      return {

      };
    })
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('angularFeedback'); //Push the interceptor here
    });
})();
