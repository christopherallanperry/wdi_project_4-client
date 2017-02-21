angular
  .module('myApp')
  .controller('SurveysNewCtrl', SurveysNewCtrl);

SurveysNewCtrl.$inject = ['Survey', 'Question', '$state', 'CurrentUserService'];
function SurveysNewCtrl(Survey, Question, $state, CurrentUserService){
  const vm = this;
  vm.submitSurvey = function(){
    Survey
      .save({survey: vm.survey})
      .$promise
      .then(data => {
        vm.surveyInitiated = data;
      });
  };

  vm.chooseQuestionType = function(){
    vm.questionTypeChosen = vm.pendingType;
  };

  vm.addQuestion = function(){
    vm.question.question_type = vm.questionTypeChosen;
    vm.question.survey_id = vm.surveyInitiated.id;
    Question
      .save(vm.question)
      .$promise
      .then(data => {
        console.log(data);
        vm.surveyInitiated.questions.push(data);
        vm.questionTypeChosen = null;
        vm.pendingType = null;
      });
  };

  vm.finishSurvey = function(){
    $state.go('usersShow', {id: CurrentUserService.currentUser.id});
  };

}
