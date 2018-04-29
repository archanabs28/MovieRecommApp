describe('Search Section >',function(){
    var scope,$httpBackend,$http;
    beforeEach(angular.mock.module('ngBoilerplate'));

    beforeEach(function () {
        angular.mock.inject(function ($injector,$rootScope){
            $httpBackend = $injector.get('$httpBackend');
            $http = $injector.get('$http');
            scope = $rootScope.$new();
            scope.$digest();
        });
    });

    //Test 0
    it('should init the Controller and services',inject(function(){
        expect(true).toBeTruthy();
    }));
});
