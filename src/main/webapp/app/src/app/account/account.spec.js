describe('Account Section >',function(){

    var scope,$httpBackend,$http,mockcommonCount,mockBollywoodMoviesFactory,mockgetMoviesbyType,mocksessionService,mocklanguageTrend,testData;
    beforeEach(angular.mock.module('ngBoilerplate'));

    beforeEach(function () {
        angular.mock.inject(function ($injector,$rootScope,$controller,_commonCount_,_BollywoodMoviesFactory_,_getMoviesbyType_,_sessionService_,_languageTrend_,_testData_){
            $httpBackend=$injector.get('$httpBackend');
            $http=$injector.get('$http');
            scope=$rootScope.$new();
            mockBollywoodMoviesFactory=_BollywoodMoviesFactory_;
            mockgetMoviesbyType=_getMoviesbyType_;
            mocksessionService=_sessionService_;
            mocklanguageTrend=_languageTrend_;
            mockcommonCount=_commonCount_;
            testData=_testData_;
            scope.$digest();
        });
    });

    //Test 0
    it('should init the controller and services', function () {
        expect(mockBollywoodMoviesFactory).toBeTruthy();
        expect(mockgetMoviesbyType).toBeTruthy();
        expect(mocksessionService).toBeTruthy();
        expect(mocklanguageTrend).toBeTruthy();
        expect(mockcommonCount).toBeTruthy();
        expect(testData).toBeTruthy();
    });

    //Test 1
    it('should test getFav method of factory getMoviesbyType', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.getFav('url')+scope.user.userId).respond(testData.getFav('data'));
        scope.movies = mockgetMoviesbyType.getFav(scope.user.userId).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBe(testData.getFav('data').length);
    });

    //Test 2
    it('should test getWat method of factory getMoviesbyType', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.getWat('url')+scope.user.userId).respond(testData.getWat('data'));
        scope.movies = mockgetMoviesbyType.getWat(scope.user.userId).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(5);
    });

    //Test 3
    it('should test getRat method of factory getMoviesbyType', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.getRat('url')+scope.user.userId).respond(testData.getWat('data'));
        scope.movies = mockgetMoviesbyType.getRat(scope.user.userId).query();
        $httpBackend.flush();
        expect(scope.movies.length).toBeGreaterThan(5);
    });

    //Test 4
    it('should test BollywoodMoviesFactory with', function() {
        $httpBackend.expectGET(testData.bollywoodMovies('url')).respond(testData.bollywoodMovies('data'));
        var result = mockBollywoodMoviesFactory.query();
        $httpBackend.flush();
        expect(result.length).toBe(testData.bollywoodMovies('data').length);
    });

    //Test 5
    it('should test factory mocklanguageTrend', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.graphData('language','url')).respond(testData.graphData('language','data'));
        scope.languages = mocklanguageTrend.getData().query();
        $httpBackend.flush();
        expect(scope.languages.length).toBeGreaterThan(3);
    });

    //Test 6
    it('should test factory mockcommonCount to return positive int values', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.graphData('userprefer','url')+scope.user.userId).respond(testData.graphData('userprefer','data'));
        scope.graphData = mockcommonCount.getData().query();
        $httpBackend.flush();
        angular.forEach(scope.graphData,function (data) {
            expect(data.moviecount).toBeGreaterThan(1);
        });
    });

    //Test 7
    it('should test if top trending languages exist in the list of languages', function () {
        scope.user = testData.user();
        $httpBackend.expectGET(testData.graphData('language','url')).respond(testData.graphData('language','data'));
        scope.languages = mocklanguageTrend.getData().query();
        $httpBackend.flush();
        var isFound = false;
        angular.forEach(testData.lang('all'),function (language) {
            angular.forEach(scope.languages,function (lang) {
               if(lang.original_language == language.code){
                   isFound = true;
               }
            });
        });
        expect(isFound).toBeTruthy();
    });
});