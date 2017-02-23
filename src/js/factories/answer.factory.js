angular
  .module('myApp')
  .factory('Answer', answerFactory);

answerFactory.$inject = ['API', '$resource'];
function answerFactory(API, $resource){
  return $resource(`${API}/answers/:id`, { id: '@id'}, {
    update: {method: 'PUT'}
  });
}
