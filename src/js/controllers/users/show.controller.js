angular
  .module('myApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$stateParams'];
function UsersShowCtrl(User, $stateParams){
  const vm = this;
  vm.user = User.get($stateParams);
  // vm.mailLink = 'mailto:' + vm.user.email;
  console.log(vm.user.email);
}
