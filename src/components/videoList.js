angular.module('video-player')
.component('videoList', {
  templateUrl: "src/templates/videoList.html",
  bindings: {
    videos: '<'
  },
  controller: function($scope) {
    //$scope.videos = window.exampleVideoData;
    //console.log($scope);
    return $scope;
  }
});
