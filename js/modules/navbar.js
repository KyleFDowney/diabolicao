var navbar= angular.module("navbar", [])

navbar.directive("navigation",function(){
  return{
    restrict: 'A',
    templateUrl: 'templates/navbar.html',
      }
    });
