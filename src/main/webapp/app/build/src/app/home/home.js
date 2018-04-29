angular.module( 'ngBoilerplate.home', ['ui.router', 'ngBoilerplate.auth'])

    .config(["$stateProvider", function config( $stateProvider ) {
      $stateProvider.state( 'home', {
        url: '/home',
        views: {
          "main": {
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html'
          }
        },
        data:{ pageTitle: 'Home' }
      });
    }])

    .factory('moviesLatest', ["$resource", function ($resource) {
        return $resource('/movie/recent').query();
    }])

    .factory('moviesTopRated', ["$resource", function ($resource) {
        return $resource('/recommeded/topRatedMovies').query();
    }])

    .factory('moviesAction', ["$resource", function ($resource) {
        return $resource('/movie/top6/Action').query();
    }])

    .factory('moviesComedy', ["$resource", function ($resource) {
        return $resource('/movie/top6/Comedy').query();
    }])

    .factory('moviesHorror', ["$resource", function ($resource) {
        return $resource('/movie/top6/Horror').query();
    }])

    .factory('moviesBollywood', ["$resource", function ($resource) {
        return $resource('/movie/top6/language/hi').query();
    }])

    .factory('moviesJapanese', ["$resource", function ($resource) {
        return $resource('/movie/top6/language/ja').query();
    }])

    .factory('getSingleMovie', ["$resource", function ($resource) {
        var movie = {};
        movie.single = function (id) {
            return $resource('/movie/'+id).query();
        };
        return movie;
    }])


    .controller( 'HomeCtrl', ["$scope", "getSingleMovie", "moviesLatest", "moviesTopRated", "moviesAction", "moviesComedy", "moviesHorror", "moviesBollywood", "moviesJapanese", function HomeCtrl($scope,getSingleMovie,moviesLatest,moviesTopRated,moviesAction,moviesComedy,moviesHorror,moviesBollywood,moviesJapanese) {
        getSingleMovie.single(129).$promise.then(function onSuccess(rData) {
            $scope.movieTitle = rData[0];
        });
        $scope.moviesLatest = moviesLatest;
        $scope.moviesTopRated = moviesTopRated;
        $scope.moviesAction = moviesAction;
        $scope.moviesComedy = moviesComedy;
        $scope.moviesHorror = moviesHorror;
        $scope.moviesBollywood = moviesBollywood;
        $scope.moviesJapanese = moviesJapanese;
    }])
;

