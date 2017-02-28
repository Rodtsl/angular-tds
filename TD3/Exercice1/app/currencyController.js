/**
 * Created by rodts on 28/02/2017.
 */
angular.module('currencyApp').controller('currencyController',['$http',function($http) {
    var self = this;

    this.from;
    this.to;
    this.what=1;
    this.result;
    this.currencies;
    this.tmp

    $http.get('app/data/currencymap.json').then(function (response) {
            self.currencies = response.data;
            self.from=self.currencies.EUR;
            self.to=self.currencies.USD;
        },
        function (response) {
            console.log("Erreur avec le statut Http : " + response.status);
        });
    this.swap = function (){
        self.tmp=self.to;
        self.to=self.from;
        self.from=self.tmp;

    }




    this.getResult = function () {
    $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q=' + self.from.code + '_' + self.to.code, {jsonpCallbackParam: 'callback'})
        .then(function (response) {
            if(angular.isDefined(response.data))
            self.result = response.data[self.from.code + '_' + self.to.code].val*self.what;
        });
    }



}]);