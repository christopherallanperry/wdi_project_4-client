angular
.module('myApp')
.controller('AnswersIndexCtrl', AnswersIndexCtrl);

AnswersIndexCtrl.$inject = ['Survey', '$stateParams'];
function AnswersIndexCtrl(Survey, $stateParams){
  const vm = this;

  Survey
  .get($stateParams)
  .$promise
  .then(data => {
    vm.survey = data;
  });
}
