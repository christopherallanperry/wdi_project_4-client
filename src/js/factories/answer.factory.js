angular
  .module('myApp')
  .factory('Answer', answerFactory);

answerFactory.$inject = ['API', '$resource'];
function answerFactory(API, $resource){
  return $resource(`${API}/answers/:id`, { id: '@_id'}, {
    update: {method: 'PUT'}
  });
}
