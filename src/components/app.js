angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($scope) {
      //$scope.videos = window.exampleVideoData;
      //console.log($scope);
      $scope.videos = window.exampleVideoData;
      return $scope;
    }
  });


