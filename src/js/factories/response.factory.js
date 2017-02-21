angular
  .module('myApp')
  .factory('Response', responseFactory);

responseFactory.$inject = ['API', '$resource'];
function responseFactory(API, $resource){
  return $resource(`${API}/responses/:id`, { id: '@_id'}, {
    update: {method: 'PUT'}
  });
}
