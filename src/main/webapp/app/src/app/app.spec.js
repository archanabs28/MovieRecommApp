describe('AppCtrl >',function(){
  var scope,$httpBackend,$http,$location,AppCtrl,mockuserExists,mocksessionService,testData;
  beforeEach(angular.mock.module('ngBoilerplate'));

  beforeEach(function () {
      angular.mock.inject(function ($injector,$rootScope,_$location_,$controller,_userExists_,_sessionService_,_testData_){
          $httpBackend = $injector.get('$httpBackend');
          $http = $injector.get('$http');
          scope = $rootScope.$new();
          $location=_$location_;
          AppCtrl=$controller('AppCtrl',{$location:$location,$scope:scope});
          mockuserExists=_userExists_;
          mocksessionService=_sessionService_;
          testData=_testData_;
          scope.$digest();
      });
  });

    //Test 0
    it('should init the Controller and services',inject(function(){
        expect(AppCtrl).toBeTruthy();
        expect(mockuserExists).toBeTruthy();
        expect(testData).toBeTruthy();
    }));

    //Test 1
    it('should check is user is logged in',inject(function(){
        var user = testData.user();
        spyOn(mocksessionService,'login').and.callThrough();
        mocksessionService.login(angular.toJson(user));
        expect(mocksessionService.login).toHaveBeenCalledWith(angular.toJson(user));

        spyOn(mocksessionService,'isLoggedIn').and.callThrough();
        scope.isLoggedIn = mocksessionService.isLoggedIn();
        expect(mocksessionService.isLoggedIn).toHaveBeenCalled();
        expect(scope.isLoggedIn).toBeTruthy();
    }));

    //Test 2
    it('should check if logged in user is not admin',inject(function(){
        var user = testData.user('admin');

        spyOn(mocksessionService,'login').and.callThrough();
        mocksessionService.login(angular.toJson(user));
        expect(mocksessionService.login).toHaveBeenCalledWith(angular.toJson(user));

        spyOn(mocksessionService,'isAdmin').and.callThrough();
        scope.isAdmin = mocksessionService.isAdmin();
        expect(mocksessionService.isAdmin).toHaveBeenCalled();
        expect(scope.isAdmin).toBeTruthy();
    }));

    //Test 3
    it('should check if state change on search is working',inject(function(){
        scope.search.data = testData.searchData('movie');
        var submitKey = testData.searchData('key');
        spyOn(scope, 'search').and.callThrough();
        scope.search(submitKey);
        expect(scope.search).toHaveBeenCalledWith(submitKey);
    }));

    //Test 4
    it('should check if logout is working', function () {
        var user = testData.user();
        spyOn(mocksessionService, 'login').and.callThrough();
        mocksessionService.login(user);
        expect(mocksessionService.login).toHaveBeenCalledWith(user);
        spyOn(mocksessionService,'isLoggedIn').and.callThrough();
        scope.isLoggedIn = mocksessionService.isLoggedIn();
        expect(mocksessionService.isLoggedIn).toHaveBeenCalled();
        expect(scope.isLoggedIn).toBeTruthy();

        spyOn(scope, 'logout').and.callThrough();
        scope.logout();
        expect(scope.logout).toHaveBeenCalled();

        scope.isLoggedIn = mocksessionService.isLoggedIn();
        expect(scope.isLoggedIn).toBeFalsy();
    });
});
