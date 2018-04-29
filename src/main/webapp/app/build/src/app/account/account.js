angular.module( 'ngBoilerplate.account', ['ui.router','ngBoilerplate.auth'])

    .config(["$stateProvider", function config( $stateProvider ) {
        $stateProvider.state( 'account', {
            url: '/account',
            views: {
                "main": {
                    controller: 'AccountCtrl',
                    templateUrl: 'account/account.tpl.html'
                }
            },
            data:{ pageTitle: 'Account' }
        });
    }])

    .config(["$stateProvider", function config( $stateProvider ) {
        $stateProvider.state( 'list', {
            url: '/list?type',
            views: {
                "main": {
                    controller: 'ListCtrl',
                    templateUrl: 'account/list.tpl.html'
                }
            },
            data:{ pageTitle: 'List' }
        });
    }])

    .factory('BollywoodMoviesFactory', ["$resource", function ($resource) {
        return $resource('/movie/language/hi');
    }])

    .factory('getMoviesbyType', ["$resource", function ($resource) {
        var movies = {};
        movies.getFav = function(userId){
            return $resource('/userfav/'+userId);
        };
        movies.getWat = function(userId){
            return $resource('/userwat/'+userId);
        };
        movies.getRat = function(userId){
            return $resource('/rating/user/'+userId);
        };
        return movies;
    }])

    .factory('updateUser', ["$resource", function($resource) {
        var user = {};
        user.commitTODB = function (account,success,failure) {
            var Account = $resource('/user/'+account.userId,account);
            return Account.update({},account,success,failure);
        };
        return user;
    }])

    .factory('languageTrend', ["$resource", function ($resource) {
        var stats = {};
        stats.getData = function(){
            return $resource('/language_trend');
        };
        return stats;
    }])

    .factory('commonCount', ["$resource", function ($resource) {
        var stats = {};
        stats.getData = function(id){
            return $resource('/userprefer/'+id);
        };
        return stats;
    }])

    .controller( 'AccountCtrl', ["$scope", "$timeout", "sessionService", "updateUser", "commonCount", "languageTrend", function AccountCtrl( $scope,$timeout,sessionService,updateUser,commonCount,languageTrend ) {
        $scope.user = sessionService.getLoggedInUser();

        $scope.common_pie_labels = [];
        $scope.common_pie_data = [];
        commonCount.getData($scope.user.userId).query().$promise.then(function onSuccess(recvData) {
           angular.forEach(recvData,function (value) {
               $scope.common_pie_labels.push(value.type);
               $scope.common_pie_data.push(value.moviecount);
           });
        });

        $scope.languages = [{lang:'Arabic',code:'ar'},{lang:'Czech',code:'cs'},{lang:'Danish',code:'da'},{lang:'German',code:'de'},{lang:'Greek',code:'el'},{lang:'English',code:'en'},{lang:'Spanish',code:'es'},{lang:'Estonian',code:'et'},{lang:'Persian',code:'fa'},{lang:'Finnish',code:'fi'},{lang:'French',code:'fr'},{lang:'Hebrew',code:'he'},{lang:'Hindi',code:'hi'},{lang:'Hungarian',code:'hu'},{lang:'Italian',code:'it'},{lang:'Japanese',code:'ja'},{lang:'Kannada',code:'ka'},{lang:'Korean',code:'ko'},{lang:'Marathi',code:'mr'},{lang:'Dutch',code:'nl'},{lang:'Norwegian',code:'no'},{lang:'Punjabi',code:'pa'},{lang:'Polish',code:'pl'},{lang:'Portuguese',code:'pt'},{lang:'Romanian',code:'ro'},{lang:'Russian',code:'ru'},{lang:'Serbian',code:'sr'},{lang:'Swedish',code:'sv'},{lang:'Tamil',code:'ta'},{lang:'Telugu',code:'te'},{lang:'Thai',code:'th'},{lang:'Turkish',code:'tr'},{lang:'Vietnamese',code:'vi'},{lang:'Urdu',code:'ur'},{lang:'Chinese',code:'zh'}];
        $scope.movies_bar_labels = [];
        $scope.movies_bar_series = ['Trending Regional Movies'];
        $scope.movies_bar_data = [];
        $scope.movies_bar_options = {scales: {yAxes: [{ticks: {beginAtZero:true}}]}};
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

        $scope.openPasswordModal = function () {
            document.querySelector('#password-dialog').showModal();
        };
        $scope.closePasswordModal = function () {
            document.querySelector('#password-dialog').close();
        };
        $scope.updatePassword = function () {
            try{
                var notification = document.querySelector('.mdl-js-snackbar');
                if(angular.equals($scope.update.password,$scope.update.confirm_password)){
                    $scope.user.password = $scope.update.password;
                    updateUser.commitTODB($scope.user,
                        function (returnedData) {
                            $scope.user = returnedData;
                            document.querySelector('#password-dialog').close();
                            notification.MaterialSnackbar.showSnackbar({message: 'Password changed!'});
                        },
                        function(){
                            document.querySelector('#password-dialog').close();
                            notification.MaterialSnackbar.showSnackbar({message: 'Update failed!'});
                        });
                    return true;
                }else{
                    notification.MaterialSnackbar.showSnackbar({message: 'Passwords do no match!'});
                }
            }catch(err){
                console.log(err);
            }
        };
    }])

    .controller( 'ListCtrl', ["$scope", "sessionService", "$stateParams", "getMoviesbyType", "BollywoodMoviesFactory", function ListCtrl( $scope,sessionService,$stateParams,getMoviesbyType,BollywoodMoviesFactory ) {
        $scope.user = sessionService.getLoggedInUser();
        $scope.type = $stateParams.type;
        if($scope.type=='Favorites'){
            $scope.movies = getMoviesbyType.getFav($scope.user.userId).query();
        }else if($scope.type=='Watched'){
            $scope.movies = getMoviesbyType.getWat($scope.user.userId).query();
        }else if($scope.type=='Rated'){
            $scope.movies = getMoviesbyType.getRat($scope.user.userId).query();
        }else{
            $scope.movies = getMoviesbyType.getRat($scope.user.userId).query();
            console.log('Coming soon..');
        }
    }])
;
