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
    $scope.historique = [];

    $scope.addToHisto = function(){

        $scope.alreadyHere = false;

        // A FAIRE : regarder si la conversion a déjà été faite
        /*for(var histo in $scope.historique){
         //Cas simple -> exactement la même conversion
         if(histo.from.code == $scope.from.code && histo.to.code == $scope.to.code){
         $scope.updateHisto(histo);
         $scope.alreadyHere = true;
         }
         }*/

        //SINON :
        if(!$scope.alreadyHere){
            $scope.conversion = {};
            $scope.conversion.from = $scope.from;
            $scope.conversion.to = $scope.to;
            $scope.conversion.amount = $scope.result;
            $scope.conversion.initialAmount = $scope.result;
            $scope.conversion.delta = 0; // A changer après
            $scope.conversion.rate = $scope.result / $scope.what;
            $scope.conversion.what = $scope.what;
            $scope.conversion.date = new Date();
            $scope.conversion.update = false; //A passer true quand on refresh
            $scope.conversion.initialRate = $scope.result / $scope.what;

            $scope.historique[$scope.historique.length] = $scope.conversion;
        }


    }

    $scope.removeFromHisto = function(conversion){
        var index = $scope.historique.indexOf(conversion);
        if (index > -1) {
            $scope.historique.splice(index, 1);
        }

    }

    $scope.updateHisto = function(conversion){
        // On save l'index
        var ind = $scope.historique.indexOf(conversion);
        // Chargement des nouvelles valeurs
        conversion.update = true;
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='
            +conversion.from.code+'_'+conversion.to.code, {jsonpCallbackParam: 'callback'}).then(function(response) {

            conversion.rate=response.data[conversion.from.code+'_'+conversion.to.code].val * 1;

        });
        conversion.amount = conversion.rate * conversion.what;
        conversion.delta = (conversion.initialRate - conversion.rate) * conversion.what;
        conversion.date = new Date();
        conversion.update = false;


        // Update dans l'array
        $scope.historique[ind] = conversion;
        $scope.alreadyHere = false;

    }



}])
    .directive("convHisto",function(){
            return {
                template:   '<td>{{conversion.from.code}}</td>' +
                '<td>{{conversion.to.code}}</td>' +
                '<td>{{conversion.rate}}</td>' +
                '<td>{{conversion.amount}}</td>' +
                '<td>{{conversion.date | date: "short"}}</td>' +
                '<td>{{conversion.delta}}</td>' +
                '<td> <i class="material-icons updateButton" ng-click="updateHisto(conversion)">refresh</i> <i class="material-icons deleteButton" ng-click="removeFromHisto(conversion)">delete</i> </td>'
            };
    });
