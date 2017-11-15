var create= angular.module("create", [])

create.directive("createCharacter",function(){
  return{
    restrict: 'A',
    templateUrl: 'templates/create.html',
      }
    });
