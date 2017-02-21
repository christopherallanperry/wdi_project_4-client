angular
  .module('myApp')
  .factory('Survey', surveyFactory);

surveyFactory.$inject = ['API', '$resource'];
function surveyFactory(API, $resource){
  return $resource(`${API}/surveys/:id`, { id: '@_id'}, {
    update: {method: 'PUT'}
  });
}
