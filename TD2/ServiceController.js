ServiceApp.controller('ServiceController', ['$scope','$http', function($scope, $http){
var self=this;
$scope.code="";
this.services= [
      {
          "name": "Web Development",
          "price": 300,
          "active":true
      },{
          "name": "Design",
          "price": 400,
          "active":false
      },{
          "name": "Integration",
          "price": 250,
          "active":false
      },{
          "name": "Formation",
          "price": 220,
          "active":false
      }
  ];

  this.toggleActive = function(service) {

    service.active = !service.active;
  };

  this.total = function (){
    self.totalC = 0;
    for (var i = 0; i < this.services.length; i++) {
      if(this.services[i].active){
        self.totalC += this.services[i].price
      }
    }
    return self.totalC;
  }

  this.checkPromo = function(code){
    if(this.promo.data[code]==undefined)
    {
      console.log("Code invalide");
      self.taux="";
    }
    else{
      self.taux = this.promo.data[code];
      return self.taux;

    }
  };

  this.selected = function (){
    var select = 0;
    for (var i = 0; i < this.services.length; i++) {
      if(this.services[i].active){
        select+=1;
      }
    }
    if(select<=1)
    {
      res=select+" service sélectionné";
    }
    else
    {
      res=select+" services sélectionnés";
    }
    return res;
  }

  $http.get('promo.json').then(successCallback,errorCallback);

    function successCallback(data) {
        self.promo=data;

    };

    function errorCallback(data) {
          console.log(data);
      };



}]);