angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.drRuthCardoso', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/drRuthCardoso.html',
        controller: 'drRuthCardosoCtrl'
      }
    }
  })

  .state('menu.produto', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('projeto', {
    url: '/page5',
    templateUrl: 'templates/projeto.html',
    controller: 'projetoCtrl'
  })

  .state('page', {
    url: '/page7',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});