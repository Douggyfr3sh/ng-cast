angular.module('video-player')
.service('youTube', function($http){
  this.searchYoutube = function(queryString, callback) {
    console.log(window.YOUTUBE_API_KEY);
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
      .then(function successfulCallback(response) {
        console.log(response);
        callback(response);
      }, function errorCallback(response) {
        console.log('there was an error with the api request: ',response);
      });
  };
});
