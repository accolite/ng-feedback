angular-user-feedback
===============

A client framework to let users post feedbacks for the application

## How to use

### Install

Install it via bower:

    $ bower install angular-user-feedback
    
An [angular.js](https://angularjs.org/), [bootstrap.js](http://getbootstrap.com), [angular-bootstrap.js](https://angular-ui.github.io/bootstrap/) and [html2canvas.js](http://html2canvas.hertzen.com/) would be installed as a dependency automatically. If it won't for some reason, install it manually:
    
    $ bower install angular
    $ bower install bootstrap
    $ bower install angular-bootstrap
    $ bower install html2canvas

Once installation is done include the following statement in index file :

    $   <script src="bower_components/angular-user-feedback/dist/angular-user-feedback.js"></script>
    $   <link rel="stylesheet" href="bower_components/angular-user-feedback/dist/angular-user-feedback.css" />

Also include the bower component in your app config like 
    
    $ angular.module('appName', [
      'angular-user-feedback',

Then insclude the following line in your html and you should start seeing a feedback link

    $ '<feedback uiLabel="Feedback", position = "right-center"></feedback>'


Possible options for postions:

    $  right-center
    $  left-center
    $  right-bottom
    $  left-bottom


