ListeApp.controller('ListeController',function($scope){
    var self=this;
    this.nbSel=0;

    this.step=1;

    this.changeView = function(){
        if(self.step==1)
        {
            self.step=2;
        }
        else{
            self.step=1;
        }
    };

    this.dispoItems = [
        {
            "url": "http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/",
            "title": "50 Must-have plugins for extending Twitter Bootstrap",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/",
            "title": "Making a Super Simple Registration System With PHP and MySQL",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/slideout-footer-css/",
            "title": "Create a slide-out footer with this neat z-index trick",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/06/digital-clock/",
            "title": "How to Make a Digital Clock with jQuery and CSS3",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/diagonal-fade-gallery/",
            "title": "Smooth Diagonal Fade Gallery with CSS3 Transitions",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/",
            "title": "Mini AJAX File Upload Form",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/04/services-chooser-backbone-js/",
            "title": "Your First Backbone.js App – Service Chooser",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg"
        }
    ];
    this.includeItems = [];

    this.select = function(si)
    {
        self.nbSel=si.length;
    };
    this.select2 = function(si)
    {
        self.nbSel2=si.length;
    };

    this.ajouter= function(si)
    {
        for(var i = 0;i<si.length;i++)
        {
            self.includeItems.push(si[i]);
        }
        console.log(self.includeItems.length);
        for(var i = 0;i<self.dispoItems.length;i++)
        {
            for(var y = 0; y<self.includeItems.length;y++)
            {
                if(self.includeItems[y]!=undefined)
                {
                    if(self.includeItems[y].$$hashKey==self.dispoItems[i].$$hashKey)
                    {
                        console.log(self.dispoItems[i]);
                        self.dispoItems.splice(i,1);
                        console.log(self.dispoItems[i]);
                    }
                }
            }
        }

    };

    this.ajouterTous = function()
    {
        for(var i = 0;i<self.dispoItems.length;i++)
        {
            self.includeItems.push(self.dispoItems[i]);
        }
        self.dispoItems.splice(0,self.dispoItems.length);
    };

    this.retirer= function(si)
    {
        for(var i = 0;i<si.length;i++)
        {
            self.dispoItems.push(si[i]);
        }

        for(var i = 0;i<self.includeItems.length;i++)
        {
            for(var y = 0; y<self.dispoItems.length;y++)
            {
                if(self.dispoItems[y]!=undefined)
                {
                    if(self.dispoItems[y].$$hashKey==self.includeItems[i].$$hashKey)
                    {
                        self.includeItems.splice(i,1);
                    }
                }
            }
        }

    };

    this.retirerTous = function()
    {
        for(var i = 0;i<self.includeItems.length;i++)
        {
            self.dispoItems.push(self.includeItems[i]);
        }
        self.includeItems.splice(0,self.includeItems.length);
    };
});