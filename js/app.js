'use strict'

var myApp = angular.module('myApp', ['create','characterlist','navbar','home']);



myApp.controller('myController', function($scope, $http) {
  var ref = firebase.database().ref('/characters');
  ref.on("child_added", function(snapshot){
    $scope.info = snapshot.val();
    console.log($scope.info);
  }, function (error) {
    console.log("Error: " + error.code);
  });
  //   $http.get('data/characters.json').then(function(response) {
  //   $scope.characters = response.data;
  //   $scope.column = '';
  // });
});



myApp.controller("newCharacterController",function($scope){
  $scope.newCharacter = {};

//

  $scope.addCharacter = function(i){
    if(!i){
      i = [];
    }

    // var newPostRef = push();

        firebase.database()
        .ref('/characters/'+ CryptoJS.MD5($scope.newCharacter.character.PersonalInfo.Name) + '/PC/')
        .set($scope.newCharacter.character);



    //

  };
});
