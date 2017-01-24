var mainApp = angular.module('mainApp',[]);

mainApp.controller('textController', function() {

    var self=this;
    this.messageNote ="";
    this.count=function(){

    return self.messageNote.lenght;



    };
});
