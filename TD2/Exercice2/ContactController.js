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
this.operation=0;

});