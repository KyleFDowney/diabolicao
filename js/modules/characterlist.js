var characterlist= angular.module("characterlist", [])

characterlist.directive("characterList",function(){
  return{
    restrict: 'A',
    templateUrl: 'templates/characterlist.html',
      }
    });
