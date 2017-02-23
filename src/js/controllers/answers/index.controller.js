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
  //   let falseCount = 0;
  //   let trueCount = 0;
  //   console.log(vm.survey);
  //   vm.pieArray = vm.survey.answers.filter(function(answer) {
  //     if (answer.question_id === 3) {
  //       answer.response === 'false' ? answer.response = 0 : answer.response = 1;
  //       return answer;
  //     }
  //   });
  //
  //   vm.pieArrayValues = vm.pieArray.map(function(value) {
  //     return value.response;
  //   });
  //
  //   vm.pieArrayTotals = vm.pieArrayValues.map(function(arrayVal) {
  //     if ( arrayVal === 0 ) {
  //       falseCount += 1;
  //     } else if ( arrayVal === 1 ) {
  //       trueCount += 1;
  //     } else {
  //       return console.log('An Error Occurred');
  //     }
  //   });
  //
  //   vm.pieLabels = [
  //     'False',
  //     'True'
  //   ];
  //   vm.pieData = [falseCount,trueCount];
  // });
  //
  // vm.barLabels = ['Strongly Agree', 'Somewhat Agree', 'Neither Agree or Disagree', 'Somewhat Disagree', 'Strongly Disagree', 'N/A']; // , 'Set Zero Base for Y'
  // vm.barSeries = ['Series A'];
  //
  // vm.barData = [
  //   [65, 59, 80, 81, 56, 55, 10]
  // ];
  });
}
