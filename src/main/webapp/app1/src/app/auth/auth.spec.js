describe('Auth Section >',function(){
    beforeEach(angular.mock.module('ngBoilerplate'));

    var scope = {},$httpBackend,$http,mockLoginCtrl,mockRegisterCtrl,mocksessionService,mockuserExists,testData;

    beforeEach(function () {
        angular.mock.inject(function ($injector,$rootScope,$controller,_sessionService_,_userExists_,_testData_) {
            $httpBackend = $injector.get('$httpBackend');
            $http = $injector.get('$http');
            scope = $rootScope.$new();
            mockLoginCtrl = $controller("LoginCtrl", {$scope: scope});
            mockRegisterCtrl = $controller("RegisterCtrl", {$scope: scope});
            mocksessionService = _sessionService_;
            mockuserExists = _userExists_;
            testData=_testData_;
            scope.$digest();
        });
    });

    // Test 0
    it('should init the Controllers', function () {
        expect(mockLoginCtrl).toBeTruthy();
        expect(mockRegisterCtrl).toBeTruthy();
        expect(mocksessionService).toBeTruthy();
        expect(mockuserExists).toBeTruthy();
        expect(testData).toBeTruthy();
    });

    //Test 2
    it('should Login a dummy user', function () {
        var user = testData.user();
        spyOn(mocksessionService, 'login').and.callThrough();
        mocksessionService.login(user);
        expect(mocksessionService.login).toHaveBeenCalledWith(user);

        spyOn(mocksessionService, 'isLoggedIn').and.callThrough();
        var isLoggedIn = mocksessionService.isLoggedIn();
        expect(mocksessionService.isLoggedIn).toHaveBeenCalled();
        expect(isLoggedIn).toBeTruthy();
    });

    //Test 3
    it('should Logout the dummy user', function () {
        spyOn(mocksessionService, 'isLoggedIn').and.callThrough();
        var isLoggedIn = mocksessionService.isLoggedIn();
        expect(mocksessionService.isLoggedIn).toHaveBeenCalled();
        expect(isLoggedIn).toBeTruthy();

        spyOn(mocksessionService,'logout').and.callThrough();
        mocksessionService.logout();
        expect(mocksessionService.logout).toHaveBeenCalled();

        isLoggedIn = mocksessionService.isLoggedIn();
        expect(mocksessionService.isLoggedIn).toHaveBeenCalled();
        expect(isLoggedIn).toBeFalsy();
    });

    //Test 4
    it('check if user exists', function () {
        var user = testData.user('user');
        var userName = user.emailId.split('@')[0];
        $httpBackend.expectGET(testData.user('exists_url')+userName).respond(user);
        var new_user = mockuserExists.get({email: userName});
        $httpBackend.flush();
        expect(new_user.emailId).toBe(user.emailId);
    });

    //Test 5
    it('should check if user is admin', function () {
        var user = testData.user('single');
        spyOn(mocksessionService,'login').and.callThrough();
        mocksessionService.login(user);
        expect(mocksessionService.login).toHaveBeenCalledWith(user);

        spyOn(mocksessionService, 'isAdmin').and.callThrough();
        var isAdmin = mocksessionService.isAdmin();
        expect(mocksessionService.isAdmin).toHaveBeenCalled();
        expect(isAdmin).toBeTruthy();
    });

    //Test 6
    it('should check if getLoggedInUser is working', function () {
        var user = testData.user();
        spyOn(mocksessionService,'login').and.callThrough();
        mocksessionService.login(angular.toJson(user));
        expect(mocksessionService.login).toHaveBeenCalledWith(angular.toJson(user));

        spyOn(mocksessionService,'getLoggedInUser').and.callThrough();
        var newUser = mocksessionService.getLoggedInUser();
        expect(mocksessionService.getLoggedInUser).toHaveBeenCalled();
        expect(newUser.userId).toBe(user.userId);
    });
});