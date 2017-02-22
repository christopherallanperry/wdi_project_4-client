angular
  .module('myApp')
  .controller('QuestionShowCtrl', QuestionShowCtrl);

QuestionShowCtrl.$inject = ['Answer', '$scope'];
function QuestionShowCtrl(Answer, $scope){
  const vm = this;

  vm.findAnswer = function(user, question){
    const answers = $scope.$parent.$parent.surveyShow.survey.answers;
    vm.answer = answers.filter(answer => {
      return answer.question_id === question.id && answer.user_id === user.id;
    })[0];
  };

  vm.createAnswer = function(question, answer){
    if (answer.user_id) {
      Answer
        .update({
          id: answer.id
        }, {
          question_id: question.id,
          response: answer.response
        })
        .$promise
        .then(data => {
          vm.answer = data;
        }, err => {
          console.log(err);
        });
    } else {
      Answer
        .save({
          question_id: question.id,
          response: answer.response
        })
        .$promise
        .then(data => {
          vm.answer = data;
        }, err => {
          console.log(err);
        });
    }
  };
}
