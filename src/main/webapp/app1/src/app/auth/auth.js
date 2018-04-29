angular.module( 'ngBoilerplate.auth', ['ui.router','ngResource'])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginCtrl',
                    templateUrl: 'auth/login.tpl.html'
                }
            },
            data:{ pageTitle: 'Login' }
        });
    })

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'register', {
            url: '/register',
            views: {
                "main": {
                    controller: 'RegisterCtrl',
                    templateUrl: 'auth/register.tpl.html'
                }
            },
            data:{ pageTitle: 'Register' }
        });
    })

    .factory('sessionService',function () {
        var session = {};
        session.login = function(data){
            localStorage.setItem('session',data);
        };
        session.logout = function () {
            localStorage.removeItem('session');
        };
        session.isLoggedIn = function(){
            return localStorage.getItem('session') !== null;
        };
        session.getLoggedInUser = function(){
            return angular.fromJson(localStorage.getItem('session'));
        };
        session.isAdmin = function(){
            try {
                var user = angular.fromJson(localStorage.getItem('session'));
                if(user.type.search('admin')!=-1){return true;}
                else{return false;}
            }catch (err){
                return false;
            }
        };
        return session;
    })

    .factory('accountService',function ($resource) {
        var service = {};
        service.register = function (account,success,failure) {
            var Account = $resource('/user/new');
            Account.save({},account,success,failure);
        };
        return service;
    })

    .factory('userExists',function ($resource) {
        return $resource('/user/email/:email',{email:'@email'});
    })

    .controller( 'LoginCtrl', function LoginCtrl( $scope,sessionService,userExists,$state ) {
        $scope.login=function(){
            var userName = $scope.user.name.split('@')[0];
            var newUser = userExists.get({ email: userName }, function() {
                var notification = document.querySelector('.mdl-js-snackbar');
                if(angular.equals($scope.user.password,newUser.password)){
                    sessionService.login(angular.toJson(newUser));
                    notification.MaterialSnackbar.showSnackbar({message: 'Login successful!'});
                    $state.go('home');
                }else{
                    notification.MaterialSnackbar.showSnackbar({message: 'Invalid password!'});
                }
            });
        };
    })

    .controller( 'RegisterCtrl', function RegisterCtrl( $scope, $state, sessionService, accountService, userExists ) {
        $scope.userId = Math.floor((Math.random() * 1000000) + 1);
        $scope.userType = 'user';
        $scope.register=function(){
            var formData = {
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName,
                emailId: $scope.user.emailId,
                password: $scope.user.password,
                type: $scope.userType
            };
            accountService.register(formData,
            function (returnedData) {
                var newUser = userExists.get({ email: $scope.user.emailId.split('@')[0] }, function() {
                    var notification = document.querySelector('.mdl-js-snackbar');
                    if(angular.equals($scope.user.password,newUser.password)){
                        sessionService.login(angular.toJson(newUser));
                        notification.MaterialSnackbar.showSnackbar(
                            {
                                message: 'Registration successful!'
                            }
                        );
                        $state.go('home');
                    }else{
                        notification.MaterialSnackbar.showSnackbar(
                            {
                                message: 'Invalid password!'
                            }
                        );
                    }
                });
                $state.go('home');
            },
            function(){
                var notification = document.querySelector('.mdl-js-snackbar');
                notification.MaterialSnackbar.showSnackbar(
                    {
                        message: 'Registration failed!'
                    }
                );
            });
        };
    })

;
