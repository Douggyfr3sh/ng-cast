// function VideoListController ($scope, $element, $attrs ) {
//   console.log('$scope.onClick on initialization: ',this);

//   return $scope;
// }



angular.module('video-player')
.component('videoList', {
  templateUrl: "src/templates/videoList.html",
  bindings: {
    videos: '<',
    clickerFxn: '<'
  },
  controller: function  ($scope, $element, $attrs ) {
    console.log('$scope.onClick on initialization: ',this);
    //return $scope;
  }
});
