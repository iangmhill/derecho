var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        url: '/home',
            templateUrl: 'partial-home.html'
            })
        
          .state('inspirationaldesigns', {
        url: '/inspirationaldesigns',
     templateUrl: 'partial-inspirationaldesigns.html'
            
        })
        
            .state('needsanalysis', {
        url: '/needsanalysis',
     templateUrl: 'partial-needsanalysis.html'
            
        });
        
        
    });
