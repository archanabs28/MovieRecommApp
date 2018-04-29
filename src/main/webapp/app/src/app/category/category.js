angular.module( 'ngBoilerplate.category', ['ui.router','ngResource'])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'category', {
            url: '/category',
            views: {
                "main": {
                    controller: 'CategoryCtrl',
                    templateUrl: 'category/category.tpl.html'
                }
            },
            data:{ pageTitle: 'Category' }
        });
    })

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'category_language', {
            url: '/category_language',
            views: {
                "main": {
                    controller: 'LangCtrl',
                    templateUrl: 'category/language.tpl.html'
                }
            },
            data:{ pageTitle: 'Language' }
        });
    })

    .controller( 'CategoryCtrl', function CategoryCtrl($scope,sessionService) {
        $scope.movies = [{genre:'Action',route:'Action'},{genre:'Adventure',route:'Adventure'},{genre:'Animation',route:'Animation'},{genre:'Comedy',route:'Comedy'},{genre:'Crime',route:'Crime'},{genre:'Documentary',route:'Documentary'},{genre:'Drama',route:'Drama'},{genre:'Family',route:'Family'},{genre:'Fantasy',route:'Fantasy'},{genre:'History',route:'History'},{genre:'Horror',route:'Horror'},{genre:'Music',route:'Music'},{genre:'Mystery',route:'Mystery'},{genre:'International',route:'Foreign'},{genre:'Romantic',route:'Romance'},{genre:'Science Fiction',route:'ScienceFiction'},{genre:'TV Movie',route:'TVMovie'},{genre:'Thriller',route:'Thriller'},{genre:'War',route:'War'},{genre:'Western',route:'Western'}];
        $scope.isLoggedIn = sessionService.isLoggedIn();
        $scope.isAdmin = sessionService.isAdmin();
    })

    .controller( 'LangCtrl', function LangCtrl($scope,sessionService) {
        $scope.languages = [{lang:'Arabic',code:'ar'},{lang:'Czech',code:'cs'},{lang:'Danish',code:'da'},{lang:'German',code:'de'},{lang:'Greek',code:'el'},{lang:'English',code:'en'},{lang:'Spanish',code:'es'},{lang:'Estonian',code:'et'},{lang:'Persian',code:'fa'},{lang:'Finnish',code:'fi'},{lang:'French',code:'fr'},{lang:'Hebrew',code:'he'},{lang:'Hindi',code:'hi'},{lang:'Hungarian',code:'hu'},{lang:'Italian',code:'it'},{lang:'Japanese',code:'ja'},{lang:'Kannada',code:'kn'},{lang:'Korean',code:'ko'},{lang:'Marathi',code:'mr'},{lang:'Dutch',code:'nl'},{lang:'Norwegian',code:'no'},{lang:'Punjabi',code:'pa'},{lang:'Polish',code:'pl'},{lang:'Portuguese',code:'pt'},{lang:'Romanian',code:'ro'},{lang:'Russian',code:'ru'},{lang:'Serbian',code:'sr'},{lang:'Swedish',code:'sv'},{lang:'Tamil',code:'ta'},{lang:'Telugu',code:'te'},{lang:'Thai',code:'th'},{lang:'Turkish',code:'tr'},{lang:'Vietnamese',code:'vi'},{lang:'Urdu',code:'ur'},{lang:'Chinese',code:'zh'}];
        $scope.isLoggedIn = sessionService.isLoggedIn();
        $scope.isAdmin = sessionService.isAdmin();
    })
;