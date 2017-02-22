angular
  .module('myApp')
  .controller('SurveyShowCtrl', SurveyShowCtrl);

SurveyShowCtrl.$inject = ['Survey', 'Question', 'Answer', '$stateParams'];
function SurveyShowCtrl(Survey, Question, Answer, $stateParams){
  const vm = this;

  vm.survey = Survey.get($stateParams);

  vm.createAnswer = function(question, answer){
    Answer
      .save({
        question_id: question.id,
        response: answer.response
      })
      .$promise
      .then(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  };
}
