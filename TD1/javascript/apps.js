var myApp = angular.module('mainApp',[]);

myApp.controller('CarreController', [function() {
    this.value=0;
    this.carre = function(value) { return value * value; };
}]);
