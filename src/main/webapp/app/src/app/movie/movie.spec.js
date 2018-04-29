describe('Movie Section >',function(){
    var scope,mscope,mockMovieCtrl,$httpBackend,$http,mocksessionService,mockgetMovie,mockgetGenreFactory,mocksearchFactory,mockfavoritesFactory,mockwatchedFactory,mockratedFactory,mocklistService,mockmoviesLanguage,mockmovieStats,mocklanguageTrend,mockgetMoviesbyType,testData;
    beforeEach(angular.mock.module('ngBoilerplate'));

    beforeEach(function () {
        angular.mock.inject(function ($injector,$rootScope,$controller,_sessionService_,_getMovie_,_getGenreFactory_,_searchFactory_,_favoritesFactory_,_watchedFactory_,_ratedFactory_,_favlistService_,_moviesLanguage_,_movieStats_,_languageTrend_,_getMoviesbyType_,_testData_){
            $httpBackend = $injector.get('$httpBackend');
            $http = $injector.get('$http');
            scope = $rootScope.$new();
            mscope= $rootScope.$new();
            mockmoviesLanguage=_moviesLanguage_;
            mockgetMovie=_getMovie_;
            mocksessionService=_sessionService_;
            mockgetGenreFactory=_getGenreFactory_;
            mocksearchFactory=_searchFactory_;
            mockfavoritesFactory=_favoritesFactory_;
            mockwatchedFactory=_watchedFactory_;
            mockratedFactory=_ratedFactory_;
            mocklistService=_favlistService_;
            mockmovieStats=_movieStats_;
            mocklanguageTrend=_languageTrend_;
            mockgetMoviesbyType=_getMoviesbyType_;
            testData=_testData_;
            scope.$digest();
        });
    });

    //Test 0
    it('should init the Controller and services',inject(function(){
        expect(mockgetMovie).toBeTruthy();
        expect(mocksessionService).toBeTruthy();
        expect(mockgetGenreFactory).toBeTruthy();
        expect(mocksearchFactory).toBeTruthy();
        expect(mockfavoritesFactory).toBeTruthy();
        expect(mockwatchedFactory).toBeTruthy();
        expect(mockratedFactory).toBeTruthy();
        expect(mocklistService).toBeTruthy();
        expect(mockmoviesLanguage).toBeTruthy();
        expect(mockmovieStats).toBeTruthy();
        expect(mocklanguageTrend).toBeTruthy();
        expect(mockgetMoviesbyType).toBeTruthy();
        expect(testData).toBeTruthy();
    }));

    //Test 1
    it('should test getMovie factory', function () {
        $httpBackend.expectGET(testData.movie('url')+testData.movie('id')).respond(testData.movie());
        scope.movie = mockgetMovie.single(testData.movie('id')).query();
        $httpBackend.flush();
        expect(scope.movie[0].movieId).toBe(testData.movie('id'));
    });

    //Test 2
    it('should test getGenreFactory factory', function () {
        var genre = testData.genre();
        $httpBackend.expectGET(testData.genre('url')+genre).respond(testData.movies());
        scope.movies = mockgetGenreFactory.getGenre(genre).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBe(testData.movies().length);
    });

    //Test 3
    it('should test searchFactory factory', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.movieFactories('search')+scope.user.userId).respond(testData.movies());
        scope.movies = mocksearchFactory.getAll(scope.user.userId).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(1);
    });

    //Test 4
    it('should test favoritesFactory factory', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.movieFactories('favorites')+scope.user.userId).respond(testData.movies());
        scope.movies = mockfavoritesFactory.getAll(scope.user.userId).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(1);
    });

    //Test 5
    it('should test watchedFactory factory', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.movieFactories('watched')+scope.user.userId).respond(testData.movies());
        scope.movies = mockwatchedFactory.getAll(scope.user.userId).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(1);
    });

    //Test 6
    it('should test ratedFactory factory', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.movieFactories('rated')+scope.user.userId).respond(testData.movies());
        scope.movies = mockratedFactory.getAll(scope.user.userId).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(1);
    });

    //Test 7
    it('should test moviesLanguage factory', function () {
        scope.language = testData.lang();
        $httpBackend.expectGET(testData.lang('url')+scope.language.code).respond(testData.movies());
        scope.movies = mockmoviesLanguage.getAll(scope.language.code).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(1);
    });

    //Test 8
    it('should test movieStats factory', function () {
        scope.movieId = testData.movie('id');
        $httpBackend.expectGET(testData.graphData('moviestats','url')+scope.movieId).respond(testData.graphData('moviestats','data'));
        scope.data = mockmovieStats.getData(scope.movieId).query();
        $httpBackend.flush();
        expect(scope.data.length).toBeGreaterThan(1);
    });

    //Test 9
    it('should test languageTrend factory', function () {
        $httpBackend.expectGET(testData.graphData('language','url')).respond(testData.movies());
        scope.data = mocklanguageTrend.getData().query();
        $httpBackend.flush();
        expect(scope.data.length).toBeGreaterThan(1);
    });

    //Test 10
    it('should test if adding a movie to favorites is working', function () {
        scope.user = testData.user();
        //Adding movie
        $httpBackend.expectGET(testData.addToFav('url',testData.movie('id'))).respond(testData.addToFav('status'));
        scope.status = mocklistService.addtoList(testData.movie('id')).query();
        $httpBackend.flush();
        expect(scope.status.status).toBe(testData.addToFav('status').status);

        //Verifying if movie is added
        $httpBackend.expectGET(testData.movieFactories('favorites')+scope.user.userId).respond(testData.movies());
        scope.movies = mockfavoritesFactory.getAll(scope.user.userId).query();
        $httpBackend.flush();
        var isFound = false;
        angular.forEach(scope.movies,function (value) {
            if(value.movieId===testData.movie('id')){
                isFound = true;
            }
        });
        expect(isFound).toBeTruthy();
    });

    //Test 11
    it('should test if watched movies are common in recommended movies', function(){
        scope.user = testData.user();
        scope.type = testData.getWat('type');
        //Getting favorites list
        $httpBackend.expectGET(testData.getWat('url')+scope.user.userId).respond(testData.getWat('data'));
        scope.fav_movies = mockgetMoviesbyType.getWat(scope.user.userId).query();
        $httpBackend.flush();

        //Getting recommended favorites
        $httpBackend.expectGET(testData.movieFactories('watched')+scope.user.userId).respond(testData.movies());
        scope.rec_movies = mockwatchedFactory.getAll(scope.user.userId).query();
        $httpBackend.flush();

        var isFound = false;
        angular.forEach(scope.rec_movies,function (rec) {
            angular.forEach(scope.fav_movies,function (fav) {
                if(rec.genres.toLowerCase().indexOf(fav.genres.toLowerCase())>=0){
                    isFound = true;
                }
            });
        });
        expect(isFound).toBeTruthy();
    });

    //Test 12
    it('should test if watched movies are common in recommended movies', function(){
        scope.user = testData.user();
        scope.movieName = testData.searchData('movie');
        //Making a new search
        $httpBackend.expectGET(testData.movieFactories('searchId')+scope.movieName).respond(testData.movies());
        scope.searchMovies = mocksearchFactory.search(scope.movieName).query();
        $httpBackend.flush();

        //Getting rated movies
        $httpBackend.expectGET(testData.movieFactories('rated')+scope.user.userId).respond(testData.movies());
        scope.ratedMovies = mockratedFactory.getAll(scope.user.userId).query();
        $httpBackend.flush();

        var isFound = false;
        angular.forEach(scope.searchMovies,function (search) {
           angular.forEach(scope.ratedMovies,function (rated) {
               if(search.movieId === rated.movieId){
                   isFound = true;
               }
           });
        });
        expect(isFound).toBeTruthy();
    });
});
