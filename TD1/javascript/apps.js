'use strict';


var mainApp = angular.module('mainApp',['ngCookies']);

mainApp.controller('textController',['$cookies', function($cookies) {

    var self=this;
    this.messageNote =$cookies.get('cookiesNote')||"";
    this.count=function(){
        var caractere= 100-self.messageNote.length;

        //self.info="Note modifiée";
        if(caractere<50 && caractere>=20)
            self.status="alert-warning";
        else if(caractere<20)
            self.status="alert-danger";
        else
            self.status="alert-info";
        return caractere;
    };
    this.counte=function() {
        return 100-self.messageNote.length;
    };

    this.clear=function () {
        self.messageNote="";
        self.info="";
        console.log(self.info);
    };
    this.save=function () {
        self.info="Note sauvegardée";
        self.status="alert-info";
        $cookies.put("cookiesNote",self.messageNote);
    };


}]);
