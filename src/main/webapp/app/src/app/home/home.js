angular.module( 'ngBoilerplate.home', ['ui.router', 'ngBoilerplate.auth'])

    .config(function config( $stateProvider ) {
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
    })

    .factory('moviesLatest', function ($resource) {
        return $resource('/movie/recent').query();
    })

    .factory('moviesTopRated', function ($resource) {
        return $resource('/recommeded/topRatedMovies').query();
    })

    .factory('moviesAction', function ($resource) {
        return $resource('/movie/top6/Action').query();
    })

    .factory('moviesComedy', function ($resource) {
        return $resource('/movie/top6/Comedy').query();
    })

    .factory('moviesHorror', function ($resource) {
        return $resource('/movie/top6/Horror').query();
    })

    .factory('moviesBollywood', function ($resource) {
        return $resource('/movie/top6/language/hi').query();
    })

    .factory('moviesJapanese', function ($resource) {
        return $resource('/movie/top6/language/ja').query();
    })

    .factory('getSingleMovie', function ($resource) {
        var movie = {};
        movie.single = function (id) {
            return $resource('/movie/'+id).query();
        };
        return movie;
    })


    .controller( 'HomeCtrl', function HomeCtrl($scope,getSingleMovie,moviesLatest,moviesTopRated,moviesAction,moviesComedy,moviesHorror,moviesBollywood,moviesJapanese) {
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
    })
;

