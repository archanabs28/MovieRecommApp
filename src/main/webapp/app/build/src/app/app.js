angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.auth',
  'ngBoilerplate.account',
  'ngBoilerplate.movie',
  'ngBoilerplate.search',
  'ngBoilerplate.admin',
  'ngBoilerplate.category',
  'ngBoilerplate.testData',
  'ui.router'
])

.config( ["$stateProvider", "$urlRouterProvider", function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
}])

.run( function run () {
})

.controller( 'AppCtrl', ["$scope", "$location", "sessionService", "$state", function AppCtrl ( $scope,$location,sessionService,$state ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Movie Recommendation Portal';
      $scope.isLoggedIn = sessionService.isLoggedIn;
      $scope.isAdmin = sessionService.isAdmin;
    }
  });
  $scope.search = function(event,status){
      if(status){
          $state.go('searchMovie',{key:$scope.search.data});
      }else{
          if(event.keyCode == 13){
              $state.go('searchMovie',{key:$scope.search.data});
          }
      }
  };
  $scope.logout = function(){
      sessionService.logout();
      try{
          var notification = document.querySelector('.mdl-js-snackbar');
          notification.MaterialSnackbar.showSnackbar({message: 'Logout successful!'});
      }catch(err){}
  };
}])
;
