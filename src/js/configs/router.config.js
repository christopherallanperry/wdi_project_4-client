angular
  .module('myApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('surveysNew', {
    url: '/surveys/new',
    templateUrl: '/js/views/surveys/new.html',
    controller: 'SurveysNewCtrl',
    controllerAs: 'surveysNew'
  })
  .state('surveysIndex', {
    url: '/surveys',
    templateUrl: '/js/views/surveys/index.html',
    controller: 'SurveysIndexCtrl',
    controllerAs: 'surveysIndex'
  })
  .state('surveyShow', {
    url: '/surveys/:id',
    templateUrl: '/js/views/surveys/show.html',
    controller: 'SurveyShowCtrl',
    controllerAs: 'surveyShow'
  })
  .state('answersIndex', {
    url: '/surveys/:id/results',
    templateUrl: '/js/views/answers/index.html',
    controller: 'AnswersIndexCtrl',
    controllerAs: 'answersIndex'
  });

  $urlRouterProvider.otherwise('/');
}
