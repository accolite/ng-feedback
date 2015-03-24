ng-error-logger
===============

A client framework to let users post feedbacks for the application

## How to use

### Install

Install it via bower:

    $ bower install ng-feedback
    
An [angular.js](https://angularjs.org/), [bootstrap.js](http://getbootstrap.com), [angular-bootstrap.js](https://angular-ui.github.io/bootstrap/) and [html2canvas.js](http://html2canvas.hertzen.com/) would be installed as a dependency automatically. If it won't for some reason, install it manually:
    
    $ bower install angular
    $ bower install bootstrap
    $ bower install angular-bootstrap
    $ bower install html2canvas

Once installation is done include the following statement in HTML
    $ <feedback uiLabel="Feedback", position = "right-center"></feedback>
Possible options for postions:
    $  right-center
    $  left-center
    $  right-bottom
    $  left-bottom


