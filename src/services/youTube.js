angular.module('video-player')
.service('youTube', function($http){
  this.search = function(queryString, callback) {
    console.log(queryString);
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: queryString,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    })
      .then(function successfulCallback({data}) {
        callback(data.items);
      }, function errorCallback(response) {
        response.error.errors.forEach(function(err) {
          console.error(err.message);
        });
      });
  };
});
