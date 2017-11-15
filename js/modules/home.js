var home= angular.module("home", [])

home.directive("homepage",function(){
  return{
    restrict: 'A',
    templateUrl: 'templates/home.html',
      }
    });
