angular.module('app', ['ionic'])

.controller("ListCtrl", function ($scope, $http) {
  $scope.data = [];

  $http.get("http://ddragon.leagueoflegends.com/cdn/6.5.1/data/en_US/champion.json").then(function (data) {
    var champData = data.data.data;
    for (var key in champData){
      var champ = champData[key];
      $scope.data.push(champ);
    }
  });
});
