angular.module('app', ['ionic'])

.controller("ListCtrl", function ($scope, $http) {
  $scope.data = [];

  $http.get("//ddragon.leagueoflegends.com/cdn/6.5.1/data/en_US/champion.json").then(function (data) {
    var champData = data.data.data;
    for (var key in champData){
      var champ = champData[key];
      $scope.data.push(champ);
    }
  });
});





// var App = angular.module('App', []);
//
// App.controller('TodoCtrl', function($scope, $http) {
//   $http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=all&api_key=RGAPI-a0a32011-1833-4044-a0f6-b49230ce29b1')
//        .then(function(res){
//           $scope.todos = res.data;
//         });
// });
// https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key=RGAPI-a0a32011-1833-4044-a0f6-b49230ce29b1


// Real
//https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=image&api_key=RGAPI-a0a32011-1833-4044-a0f6-b49230ce29b1
