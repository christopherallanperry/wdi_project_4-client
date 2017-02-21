angular
  .module('myApp')
  .factory('Question', questionFactory);

questionFactory.$inject = ['API', '$resource'];
function questionFactory(API, $resource){
  return $resource(`${API}/questions/:id`, { id: '@_id'}, {
    update: {method: 'PUT'}
  });
}
