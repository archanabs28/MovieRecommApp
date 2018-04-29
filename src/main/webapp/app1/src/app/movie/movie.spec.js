describe('Movie Section >',function(){
    var scope,mscope,mockMovieCtrl,$httpBackend,$http,mocksessionService,mockgetMovie,mockgetGenreFactory,mocksearchFactory,mockfavoritesFactory,mockwatchedFactory,mockratedFactory,mocklistService,mockmoviesLanguage,mockmovieStats,mocklanguageTrend,testData;
    beforeEach(angular.mock.module('ngBoilerplate'));

    beforeEach(function () {
        angular.mock.inject(function ($injector,$rootScope,$controller,_sessionService_,_getMovie_,_getGenreFactory_,_searchFactory_,_favoritesFactory_,_watchedFactory_,_ratedFactory_,_listService_,_moviesLanguage_,_movieStats_,_languageTrend_,_testData_){
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
            mocklistService=_listService_;
            mockmovieStats=_movieStats_;
            mocklanguageTrend=_languageTrend_;
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
        expect(testData).toBeTruthy();
    }));

    //Test 1
    it('should test getMovie factory', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.movie('url')+2222).respond(testData.movie());
        scope.movie = mockgetMovie.single(2222).query();
        $httpBackend.flush();
        expect(scope.movie.length).toBe(1);
    });

    //Test 2
    it('should test getGenreFactory factory', function () {
        var genre = testData.genre();
        $httpBackend.expectGET(testData.genre('url')+genre).respond(testData.movies());
        scope.movies = mockgetGenreFactory.getGenre(genre).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(1);
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
});
