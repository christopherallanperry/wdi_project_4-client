angular
  .module('myApp')
  .controller('SurveysIndexCtrl', SurveysIndexCtrl);

SurveysIndexCtrl.$inject = ['Survey'];
function SurveysIndexCtrl(Survey){
  const vm = this;
  vm.surveys = Survey.query();
}
