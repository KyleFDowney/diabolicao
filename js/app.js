'use strict'

var myApp = angular.module('myApp', ['create','characterlist','navbar','home']);



myApp.controller('myController', function($scope, $http) {
    $http.get('data/characters.json').then(function(response) {
    $scope.characters = response.data;
    $scope.column = '';
  });
});



myApp.controller("newCharacterController",function($scope){
  $scope.newCharacter = {};

//

  $scope.addCharacter = function(i){
    if(!i){
      i = [];
    }

        firebase.database()
        .ref('/characters/' + CryptoJS.MD5(i.name)+CryptoJS.MD5($scope.newCharacter.character))
        .set($scope.newCharacter.character);



    //

  };
});
