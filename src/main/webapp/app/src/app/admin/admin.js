angular.module( 'ngBoilerplate.admin', ['ui.router','ngBoilerplate.auth','chart.js'])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'admin', {
            url: '/admin',
            views: {
                "main": {
                    controller: 'AdminCtrl',
                    templateUrl: 'admin/admin.tpl.html'
                }
            },
            data:{ pageTitle: 'Admin' }
        });
    })

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'admin_movies', {
            url: '/admin_movies',
            views: {
                "main": {
                    controller: 'AdminMoviesCtrl',
                    templateUrl: 'admin/movies.tpl.html'
                }
            },
            data:{ pageTitle: 'Movies' }
        });
    })

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'admin_users', {
            url: '/admin_users',
            views: {
                "main": {
                    controller: 'AdminUsersCtrl',
                    templateUrl: 'admin/users.tpl.html'
                }
            },
            data:{ pageTitle: 'Users' }
        });
    })

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'user_stats', {
            url: '/stats/user?id',
            views: {
                "main": {
                    controller: 'UserStatsCtrl',
                    templateUrl: 'admin/user-stats.tpl.html'
                }
            },
            data:{ pageTitle: 'Movie Stats' }
        });
    })

    .factory('updateUser', function($resource) {
        var user = {};
        user.update = function (account,success,failure) {
            var Account = $resource('/user/'+account.userId,account,{'update': { method:'PUT' }});
            Account.update({},account,success,failure);
        };
        return user;
    })

    .factory('movieService',function ($resource) {
        var service = {};
        service.add = function (movie,success,failure) {
            var Movie = $resource('/movie/new');
            Movie.save({},movie,success,failure);
        };
        return service;
    })

    .factory('getMovies', function ($resource) {
        return $resource('/movies');
    })

    .factory('getUsers', function ($resource) {
        return $resource('/users');
    })

    .factory('getUserData', function ($resource) {
        var user = {};
        user.user = function(id){
            return $resource('/user/'+id);
        };
        user.stats = function(id){
            return $resource('/userstat/'+id);
        };
        user.moviestats = function(id){
            return $resource('/userprefer/'+id);
        };
        user.moviesByYear = function () {
            return $resource('/moviesByYear');
        };
        user.trendingMovies = function () {
            return $resource('/trendingMovies');
        };
        user.topRatedMovies = function () {
            return $resource('/topRatedMovies');
        };
        return user;
    })

    .factory('getUserDataById', function (getUserData) {
        var user = {};
        user.user = function(id){
            return getUserData.user(id).query();
        };
        user.stats = function (id) {
            return getUserData.stats(id).query();
        };
        user.moviestats = function (id) {
            return getUserData.moviestats(id).query();
        };
        user.moviesByYear = function () {
            return getUserData.moviesByYear().query();
        };
        user.trendingMovies = function () {
            return getUserData.trendingMovies().query();
        };
        user.topRatedMovies = function () {
            return getUserData.topRatedMovies().query();
        };
        return user;
    })



    .controller('UserStatsCtrl', function AdminMovieStatsCtrl( $scope,getUserDataById,$stateParams ) {
        $scope.common_pie_labels = [];
        $scope.common_pie_data = [];
        $scope.rating_bar_data=[];
        $scope.rating_bar_labels=[];
        $scope.rating_bar_options = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}};
        getUserDataById.user($stateParams.id).$promise.then(function onSuccess(recvDataA) {
            $scope.thisUser = recvDataA[0];
            getUserDataById.stats($stateParams.id).$promise.then(function onSuccess(recvDataB) {
                angular.forEach(recvDataB,function (value) {
                    $scope.rating_bar_data.push(value.rating);
                    $scope.rating_bar_labels.push(value.moviename);
                });
            });
            getUserDataById.moviestats($stateParams.id).$promise.then(function onSuccess(recvDataB) {
                angular.forEach(recvDataB,function (value) {
                    $scope.common_pie_labels.push(value.type);
                    $scope.common_pie_data.push(value.moviecount);
                });
            });
        });
    })

    .controller('AdminMoviesCtrl', function AdminMoviesCtrl( $scope,getMovies,$timeout,$state ) {
        var movies = getMovies.query();
        movies.$promise.then(function(data) {
            $scope.movies = data;
        });
        $scope.loadMore = function(){
            $state.reload();
        };
    })

    .controller('AdminUsersCtrl', function AdminUsersCtrl( $scope,getUsers,$state ) {
        $scope.isLoaded = false;
        var users = getUsers.query();
        users.$promise.then(function(data) {
            $scope.users = data;
            $scope.isLoaded = true;
        });
        $scope.loadMore = function(){
            $state.reload();
        };
    })

    .controller('AdminCtrl', function AdminCtrl( $scope,sessionService,updateUser,movieService,getUserDataById ) {
        $scope.user = sessionService.getLoggedInUser();

        //Chart.js
        //Movies bar chart
        $scope.movies_bar_series = ['Movies'];
        $scope.movies_bar_options = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}};
        $scope.movies_bar_labels=[];$scope.movies_bar_data=[];

        //Top trending movies chart
        $scope.trending_movies_line_labels = [];
        $scope.trending_movies_line_data = [];
        $scope.trending_movies_line_options = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}};

        //Top rated movies chart
        $scope.rated_movie_line_labels = ["Dunkirk", "Avengers", "Oceans 12", "Bloodline", "Underworld", "Sholey", "John Wick"];
        $scope.rated_movie_line_data = [81, 40, 55, 90, 50, 59, 80];
        $scope.rated_movie_line_options = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}};

        getUserDataById.moviesByYear().$promise.then(function onSuccess(recvDataA) {
            angular.forEach(recvDataA,function (value) {
                $scope.movies_bar_labels.push(value.movieYear);
                $scope.movies_bar_data.push(value.moviescount);
            });
            getUserDataById.trendingMovies().$promise.then(function onSuccess(recvDataB) {
                var i=0;
                angular.forEach(recvDataB,function (value) {
                    if(i<10){
                        $scope.trending_movies_line_labels.push(value.moviename);
                        $scope.trending_movies_line_data.push(value.usercount);
                        $scope.trending_movies_line_data.reverse();
                        i++;
                    }
                });
                getUserDataById.topRatedMovies().$promise.then(function onSuccess(recvDataC) {
                   i=0;
                   angular.forEach(recvDataC,function (value) {
                       if(i<10){
                           $scope.rated_movie_line_labels.push(value.moviename);
                           $scope.rated_movie_line_data.push(value.userrating);
                           $scope.rated_movie_line_labels.reverse();
                           $scope.rated_movie_line_data.reverse();
                           i++;
                       }
                   });
                });
            });
        });

        //Open/Close modal
        $scope.openPasswordModal = function () {
            document.querySelector('#password-dialog').showModal();
        };
        $scope.closePasswordModal = function () {
            document.querySelector('#password-dialog').close();
        };
        $scope.openMovieModal = function () {
            document.querySelector('#movie-dialog').showModal();
        };
        $scope.closeMovieModal = function () {
            document.querySelector('#movie-dialog').close();
        };

        //Update password
        $scope.updatePassword = function () {
            var notification = document.querySelector('.mdl-js-snackbar');
            if(angular.equals($scope.update.password,$scope.update.confirm_password)){
                $scope.user.password = $scope.update.password;
                updateUser.update($scope.user,
                    function (returnedData) {
                        $scope.user = returnedData;
                        document.querySelector('#password-dialog').close();
                        notification.MaterialSnackbar.showSnackbar({message: 'Password changed!'});
                    },
                    function(){
                        notification.MaterialSnackbar.showSnackbar({message: 'Update failed!'});
                    });

            }else{
                notification.MaterialSnackbar.showSnackbar({message: 'Passwords do no match!'});
            }
        };

        //Add a movie
        $scope.movie = {};
        $scope.addMovie = function(){
            var btc = angular.isUndefined($scope.movie.belongs_to_collection)?0:$scope.movie.belongs_to_collection;
            var pop = angular.isUndefined($scope.movie.popularity)?0:$scope.movie.popularity;
            var pp = angular.isUndefined($scope.movie.poster_path)?0:$scope.movie.poster_path;
            var pid = angular.isUndefined($scope.movie.productionID)?0:$scope.movie.productionID;
            var votea = angular.isUndefined($scope.movie.vote_average)?0:$scope.movie.vote_average;
            var votec = angular.isUndefined($scope.movie.vote_count)?0:$scope.movie.vote_count;
            var run = angular.isUndefined($scope.movie.runtime)?0:$scope.movie.runtime;
            var movieData = {
                belongs_to_collection: btc,
                popularity: pop,
                poster_path: pp,
                productionID: pid,
                runtime: run,
                vote_average: votea,
                vote_count: votec,
                movieName: $scope.movie.movieName,
                genre: $scope.movie.genre,
                original_language: $scope.movie.original_language,
                overview: $scope.movie.overview,
                release_date: $scope.movie.release_date
            };
            var notification = document.querySelector('.mdl-js-snackbar');
            movieService.add(movieData,
                function (returnedData) {
                    console.log(returnedData);
                    notification.MaterialSnackbar.showSnackbar({message: 'Movie Added!'});
                },
                function(){
                    var notification = document.querySelector('.mdl-js-snackbar');
                    notification.MaterialSnackbar.showSnackbar({message: 'Operation failed!'});
                });
        };
    })

;