angular
  .module('myApp')
  .controller('SurveyShowCtrl', SurveyShowCtrl);

SurveyShowCtrl.$inject = ['Survey', 'Question', 'Response', '$state', 'CurrentUserService'];
function SurveyShowCtrl(Survey, Question, Response, $state, CurrentUserService){
  const vm = this;
  vm.submitResponse = function(){
    Survey
      .save({response: vm.response})
      .$promise
      .then(data => {
        vm.responseInitiated = data;
      });
  };
}
