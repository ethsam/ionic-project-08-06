angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.carte', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/carte.html',
        controller: 'carteCtrl'
      }
    }
  })

  .state('tabsController.contact', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('prSentation', {
    url: '/page5',
    templateUrl: 'templates/prSentation.html',
    controller: 'prSentationCtrl'
  })

  .state('notreQuipe', {
    url: '/page6',
    templateUrl: 'templates/notreQuipe.html',
    controller: 'notreQuipeCtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')


});