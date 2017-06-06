angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      //$scope.videos = window.exampleVideoData;
      //console.log($scope);
      this.onClick = ($event) => {
        console.log('clicked from $scope fxn',$event);
      };
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      //return $scope;
    }
  });


