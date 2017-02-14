/**
 * Created by rodts on 14/02/2017.
 */
ContactApp.controller('ContactController',function() {

var self=this;

    this.contacts= [
    {
       "prenom":"Mark",
       "nom":"Zuckerberg",
       "mail":"mark@facebook.com"
    },
    {
        "prenom":"Bill",
        "nom":"Gates",
        "mail":"bill@microsoft.com"
    },
    {
        "prenom":"Alexis",
        "nom":"Boukhali Montagne",
        "mail":"alexis@trash-talk.tx"
    }
    ];
this.toadd=0;
 this.tmpContact=[];

    this.add=function(){

        self.contacts.push(self.tmpContact);

    };
    this.operation ="Ajouter";

    this.update=function(){

        self.add();
        self.tmpContact=[];
        self.toadd=0;
    };
    this.toUpdate=function(){
        self.operation="Modifier";
        self.tmpContact=self;
        self.toadd=1;


    }

});