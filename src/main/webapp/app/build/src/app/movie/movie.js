angular.module( 'ngBoilerplate.movie', ['ui.router','ngBoilerplate.auth'])

    .config(["$stateProvider", function config( $stateProvider ) {
        $stateProvider.state( 'movie', {
            url: '/movie?id',
            views: {
                "main": {
                    controller: 'MovieCtrl',
                    templateUrl: 'movie/movie.tpl.html'
                }
            },
            data:{ pageTitle: 'Movie' }
        });
    }])

    .config(["$stateProvider", function config( $stateProvider ) {
        $stateProvider.state( 'movies', {
            url: '/genre?genre',
            views: {
                "main": {
                    controller: 'MoviesCtrl',
                    templateUrl: 'movie/movies.tpl.html'
                }
            },
            data:{ pageTitle: 'Movies' }
        });
    }])

    .config(["$stateProvider", function config( $stateProvider ) {
        $stateProvider.state( 'language', {
            url: '/language?language',
            views: {
                "main": {
                    controller: 'LanguageCtrl',
                    templateUrl: 'movie/languages.tpl.html'
                }
            },
            data:{ pageTitle: 'Languages' }
        });
    }])

    .config(["$stateProvider", function config( $stateProvider ) {
        $stateProvider.state( 'recommended', {
            url: '/recommended',
            views: {
                "main": {
                    controller: 'RecCtrl',
                    templateUrl: 'movie/recommended.tpl.html'
                }
            },
            data:{ pageTitle: 'Recommended' }
        });
    }])

    .factory('getMovie', ["$resource", function ($resource) {
        var movie = {};
        movie.single = function(id){
            return $resource('/movie/'+id);
        };
        return movie;
    }])

    .factory('getMovie2', ["getMovie", function (getMovie) {
        var movie = {};
        movie.withID = function(id){
            return getMovie.single(id).query();
        };
        return movie;
    }])

    .factory('getGenreFactory', ["$resource", function ($resource) {
        var genre = {};
        genre.getGenre = function(genre){
            return $resource('/movie/genre/'+genre);
        };
        return genre;
    }])

    .factory('listService',["$resource", function ($resource) {
        var service = {};
        service.addtoList = function (account,success,failure) {
            var Account = $resource('/userfav/new');
            Account.save({},account,success,failure);
        };
        return service;
    }])

    .factory('favlistService',["$resource", function ($resource) {
        var service = {};
        service.addtoList = function(id){
            return $resource('/recommend/favorite/'+id);
        };
        return service;
    }])

    .factory('ratingService',["$resource", function ($resource) {
        var service = {};
        service.rateMovie = function (account,success,failure) {
            var Rating = $resource('/rating/new');
            Rating.save({},account,success,failure);
        };
        return service;
    }])

    .factory('ratedFactory', ["$resource", function ($resource) {
        var movies = {};
        movies.getAll = function(id){
            return $resource('/cosine/'+id);
        };
        return movies;
    }])

    .factory('watchedFactory', ["$resource", function ($resource) {
        var movies = {};
        movies.getAll = function(id){
            return $resource('/recommend/watched/'+id);
        };
        return movies;
    }])

    .factory('favoritesFactory', ["$resource", function ($resource) {
        var movies = {};
        movies.getAll = function(id){
            return $resource('/recommend/favorite/'+id);
        };
        return movies;
    }])

    .factory('searchFactory', ["$resource", function ($resource) {
        var movies = {};
        movies.getAll = function(id){
            return $resource('/recommend/presearch/'+id);
        };
        movies.search = function (id) {
            return $resource('/search-movie/'+id);
        };
        return movies;
    }])

    .factory('moviesLanguage', ["$resource", function ($resource) {
        var movies = {};
        movies.getAll = function(id){
            return $resource('/movie/language/'+id);
        };
        return movies;
    }])

    .factory('movieStats', ["$resource", function ($resource) {
        var movies = {};
        movies.getData = function(id){
            return $resource('/moviestat/'+id);
        };
        return movies;
    }])

    .factory('languageTrend', ["$resource", function ($resource) {
        var stats = {};
        stats.getData = function(){
            return $resource('/language_trend');
        };
        return stats;
    }])

    .controller( 'RecCtrl', ["$scope", "watchedFactory", "searchFactory", "favoritesFactory", "ratedFactory", "sessionService", function RecCtrl( $scope,watchedFactory,searchFactory,favoritesFactory,ratedFactory,sessionService ) {
        $scope.user = sessionService.getLoggedInUser();
        $scope.moviesRated = ratedFactory.getAll($scope.user.userId).query();
        $scope.moviesWatched = watchedFactory.getAll($scope.user.userId).query();
        $scope.moviesFavorites = favoritesFactory.getAll($scope.user.userId).query();
        $scope.moviesSearch = searchFactory.getAll($scope.user.userId).query();
    }])

    .controller( 'MovieCtrl', ["$scope", "getMovie2", "languageTrend", "movieStats", "$stateParams", "sessionService", "userExists", "listService", "ratingService", function MovieCtrl( $scope,getMovie2,languageTrend,movieStats,$stateParams,sessionService,userExists,listService,ratingService ) {
        $scope.user = sessionService.getLoggedInUser();
        $scope.languages = [{lang:'Arabic',code:'ar'},{lang:'Czech',code:'cs'},{lang:'Danish',code:'da'},{lang:'German',code:'de'},{lang:'Greek',code:'el'},{lang:'English',code:'en'},{lang:'Spanish',code:'es'},{lang:'Estonian',code:'et'},{lang:'Persian',code:'fa'},{lang:'Finnish',code:'fi'},{lang:'French',code:'fr'},{lang:'Hebrew',code:'he'},{lang:'Hindi',code:'hi'},{lang:'Hungarian',code:'hu'},{lang:'Italian',code:'it'},{lang:'Japanese',code:'ja'},{lang:'Kannada',code:'ka'},{lang:'Korean',code:'ko'},{lang:'Marathi',code:'mr'},{lang:'Dutch',code:'nl'},{lang:'Norwegian',code:'no'},{lang:'Punjabi',code:'pa'},{lang:'Polish',code:'pl'},{lang:'Portuguese',code:'pt'},{lang:'Romanian',code:'ro'},{lang:'Russian',code:'ru'},{lang:'Serbian',code:'sr'},{lang:'Swedish',code:'sv'},{lang:'Tamil',code:'ta'},{lang:'Telugu',code:'te'},{lang:'Thai',code:'th'},{lang:'Turkish',code:'tr'},{lang:'Vietnamese',code:'vi'},{lang:'Urdu',code:'ur'},{lang:'Chinese',code:'zh'}];
        $scope.common_pie_data = [];
        $scope.common_pie_labels = [];

        $scope.movie_stats_bar_labels = ['Popularity','Vote Average'];
        $scope.movie_stats_bar_options = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}};

        $scope.movies_bar_labels = [];
        $scope.movies_bar_series = ['Trending Regional Movies'];
        $scope.movies_bar_data = [];
        $scope.movies_bar_options = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}};

        getMovie2.withID($stateParams.id).$promise.then(function onSuccess(rData) {
            $scope.movie = rData[0];
            $scope.movie_rating = $scope.movie.vote_average;
            //Bar chart
            $scope.movie_stats_bar_series = [$scope.movie.movieName, 'Average'];
            $scope.movie_stats_bar_data = [
                [$scope.movie.popularity, $scope.movie.vote_average],
                [5, 5]
            ];
            //Pie chart
            movieStats.getData($scope.movie.movieId).query().$promise.then(function onSuccess(recvData) {
                angular.forEach(recvData,function (value) {
                    $scope.common_pie_data.push(value['count(userid)']);
                    $scope.common_pie_labels.push(value.rating);
                });
            });
        });

        //Trend graph
        languageTrend.getData().query().$promise.then(function onSuccess(recvData) {
            angular.forEach(recvData,function (value) {
                $scope.movies_bar_data.push(value.usercount);
                angular.forEach($scope.languages,function (language) {
                    if(language.code==value.original_language){
                        $scope.movies_bar_labels.push(language.lang);
                    }
                });
            });
        });

        var notification = document.querySelector('.mdl-js-snackbar');
        $scope.openUpdateModal = function(){
            if($scope.isLoggedIn()){
                document.querySelector('#rating-dialog').showModal();
            }else{
                notification.MaterialSnackbar.showSnackbar({message: 'Please login to add a rating!'});
            }
        };
        $scope.closeUpdateModal = function(){
            document.querySelector('#rating-dialog').close();
        };
        $scope.toFavorite = function(){
            if($scope.isLoggedIn()){
                var postData = {
                    userid: $scope.user.userId,
                    movieid: $scope.movie.movieId,
                    type: 'F'
                };
                listService.addtoList(postData,
                    function() {
                        notification.MaterialSnackbar.showSnackbar({message: 'Movie added to favorites!'});
                    },
                    function(){
                        notification.MaterialSnackbar.showSnackbar({message: 'Operation failed!'});
                    });
            }else{
                notification.MaterialSnackbar.showSnackbar({message: 'Please login to create a Favorites list!'});
            }
        };
        $scope.toWatched = function(){
            if($scope.isLoggedIn()){
                var postData = {
                    userid: $scope.user.userId,
                    movieid: $scope.movie.movieId,
                    type: 'W'
                };
                listService.addtoList(postData,
                    function() {
                        notification.MaterialSnackbar.showSnackbar({message: 'Movie added to watched!'});
                    },
                    function(){
                        notification.MaterialSnackbar.showSnackbar({message: 'Operation failed!'});
                    });
            }else{
                notification.MaterialSnackbar.showSnackbar({message: 'Please login to create a Wachted list!'});
            }
        };
        $scope.addRating = function(){
            if($scope.isLoggedIn()){
                $scope.movie_rating = $scope.rating.value;
                var ratingData = {
                    userid: $scope.user.userId,
                    movieid: $scope.movie.movieId,
                    imdbId: 0,
                    rating: parseInt($scope.movie_rating,10)
                };
                ratingService.rateMovie(ratingData,
                    function() {
                        document.querySelector('#rating-dialog').close();
                        notification.MaterialSnackbar.showSnackbar({message: 'Movie rated successfully!'});
                    },
                    function(){
                        notification.MaterialSnackbar.showSnackbar({message: 'Operation failed!'});
                    });
            }else{
                notification.MaterialSnackbar.showSnackbar({message: 'Please login to add a rating!'});
            }
        };
    }])

    .controller( 'MoviesCtrl', ["$scope", "$stateParams", "getGenreFactory", "$state", function MoviesCtrl( $scope,$stateParams,getGenreFactory,$state ) {
        $scope.genre = $stateParams.genre;
        $scope.movies = getGenreFactory.getGenre($stateParams.genre).query();
        $scope.loadMore = function(){
            $state.reload();
        };
    }])

    .controller( 'LanguageCtrl', ["$scope", "$stateParams", "moviesLanguage", "$state", "sessionService", function LanguageCtrl( $scope,$stateParams,moviesLanguage,$state,sessionService ) {
        $scope.user = sessionService.getLoggedInUser();
        $scope.languages = [{lang:'Arabic',code:'ar'},{lang:'Czech',code:'cs'},{lang:'Danish',code:'da'},{lang:'German',code:'de'},{lang:'Greek',code:'el'},{lang:'English',code:'en'},{lang:'Spanish',code:'es'},{lang:'Estonian',code:'et'},{lang:'Persian',code:'fa'},{lang:'Finnish',code:'fi'},{lang:'French',code:'fr'},{lang:'Hebrew',code:'he'},{lang:'Hindi',code:'hi'},{lang:'Hungarian',code:'hu'},{lang:'Italian',code:'it'},{lang:'Japanese',code:'ja'},{lang:'Kannada',code:'kn'},{lang:'Korean',code:'ko'},{lang:'Marathi',code:'mr'},{lang:'Dutch',code:'nl'},{lang:'Norwegian',code:'no'},{lang:'Punjabi',code:'pa'},{lang:'Polish',code:'pl'},{lang:'Portuguese',code:'pt'},{lang:'Romanian',code:'ro'},{lang:'Russian',code:'ru'},{lang:'Serbian',code:'sr'},{lang:'Swedish',code:'sv'},{lang:'Tamil',code:'ta'},{lang:'Telugu',code:'te'},{lang:'Thai',code:'th'},{lang:'Turkish',code:'tr'},{lang:'Vietnamese',code:'vi'},{lang:'Urdu',code:'ur'},{lang:'Chinese',code:'zh'}];
        angular.forEach($scope.languages, function(value, key) {
            if(value.code == $stateParams.language){
                $scope.language = value.lang;
            }
        });
        // $scope.language = $stateParams.language;
        $scope.movies = moviesLanguage.getAll($stateParams.language).query();
        $scope.loadMore = function () {
            $state.reload();
        };
    }])
;