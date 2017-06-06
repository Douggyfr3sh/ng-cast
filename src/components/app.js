angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($scope) {
      //$scope.videos = window.exampleVideoData;
      //console.log($scope);
      this.onClick = ($event) => {
        console.log('clicked from $scope fxn',$event);
      };
      $scope.videos = window.exampleVideoData;
      $scope.currentVideo = window.exampleVideoData[0];
      return $scope;
    }
  });


