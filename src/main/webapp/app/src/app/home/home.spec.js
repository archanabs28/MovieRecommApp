describe('Home Section >',function(){
    beforeEach(module('ngBoilerplate'));

    var scope = {},HomeCtrl,$httpBackend;

    beforeEach(inject(function($rootScope,_$httpBackend_,$controller){
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        HomeCtrl=$controller('HomeCtrl',{$scope:scope});
    }));
});