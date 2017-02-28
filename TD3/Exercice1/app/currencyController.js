/**
 * Created by rodts on 28/02/2017.
 */
currencyApp.controller('currencyController',['$http',function($http) {
    var self = this;

    this.from;
    this.to;
    this.what=1;
    this.result;
    this.currency;

    $http.get('app/data/currencymap.json').then(function (response) {
            self.currencies = response.data;
            self.from=self.currency.EUR;
            self.to=self.currency.USD;
        },
        function (response) {
            console.log("Erreur avec le statut Http : " + response.status);
        });





    this.getResult = function () {
    $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q=' + from.code + '_' + to.code, {jsonpCallbackParam: 'callback'})
        .then(function (response) {
            self.result = response.data[self.from.code + '_' + self.to.code].val.self.what;
        });
    }

    this.swap = function (){


    }

}]);