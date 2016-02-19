import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
        
            return Ember.RSVP.hash({
          
                nav:[{id:1,label:"Corrosion",level:1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",children:[{id:4,label:"General",level:2,children:[],icon:"none"}],icon:"corr",isRevealed:"hide"},
                	{id:2,label:"Pipeliner",level:1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        children:[{id:5,label:"Shutdown Activities",level:2,children:[],icon:"none"},
                                   {id:7,label:"Construction",level:2,children:[],icon:"none"},
                                   {id:8,label:"Inspection and Damage Prevention",level:2,children:[],icon:"none"},
                                   {id:9,label:"Pipeline Maintenance",level:2,
                                   children:[{id:10,label:"Pigging",level:3,children:[],icon:"none",isactive:"inactive"}],icon:"none",isRevealed:"hide"} ],icon:"pipe",isRevealed:"hide"},
                	{id:3,label:"Measurement",level:1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",children:[{id:6,label:"Inspection and Testing",level:2,children:[{id:7,label:"Meters",level:3,children:[],icon:"none"}],icon:"none"}],icon:"meas", isRevealed:"hide"},],

                tabs:[{id:1,label:"All",level:1,children:[], isactive:"active"},
                	{id:2,label:"Job Aids",level:1,children:[],isactive:"inactive"},
                    {id:3,label:"SOP's",level:1,children:[], isactive:"inactive"},
                	{id:4,label:"References",level:1,children:[], isactive:"inactive"},
                	{id:5,label:"Tools",level:1,children:[], isactive:"inactive"}],

               

                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor orci mauris, eget tincidunt sapien viverra sed. Donec vitae diam non eros sodales tincidunt eget ut lacus. Nunc cursus sapien at turpis fermentum luctus. Sed ornare nibh ut tortor viverra, et pretium lorem commodo. ",

               
                helpcontent:[{id:1,
                              title:"Shutdown Activities",
                              description:"Procedure describing the requirements and the sequence of events which must take place for a pipeline or compressor station to be removed from service.",
                              discipline:[2,5],
                              type:3,
                              link:"https://thesource.spectraenergy.com/resource/operational-us/_layouts/15/WopiFrame2.aspx?sourcedoc=https://thesource.spectraenergy.com/resource/operational-us/Standards/Volume_1/1_2010.doc",
                          },
                            {id:2,
                             title:"Tables and Formulae",
                             description:"Reference containing various tables, graphs and figures used in corrosion control.",
                             discipline:[1,4],
                             type:4,
                             link:"https://thesource.spectraenergy.com/resource/operational-us/_layouts/15/WopiFrame2.aspx?sourcedoc=https://thesource.spectraenergy.com/resource/operational-us/Standards/Volume_2/2_1030.doc",
                         },
                            {id:3,
                             title:"Ultrasonic Meters",
                             description:"Procedure describing the inspecting and testing of ultrasonic gas flow meters.",
                             discipline:[3,6],
                             type:3, 
                             link:"https://thesource.spectraenergy.com/resource/operational-us/_layouts/15/WopiFrame2.aspx?sourcedoc=https://thesource.spectraenergy.com/resource/operational-us/Standards/Volume_3/3_2080.doc",
                         },
                            {id:4,
                              title:"Branch Connections - Hot Taps",
                              description:"Procedure describing the necessary communications with Gas Control and the reporting requirements associated with cutting into an operating pipeline and connecting branch piping while the line is under pressure, also called 'hot tapping'.",
                              discipline:[2,7],
                              type:3,
                              link:"https://thesource.spectraenergy.com/resource/operational-us/_layouts/15/WopiFrame2.aspx?sourcedoc=https://thesource.spectraenergy.com/resource/operational-us/Standards/Volume_1/1_3040.doc",
                          },
                            {id:5,
                             title:"Leakage Surveys Utilizing Gas Detection Equipment",
                             description:"Procedure describing the methods for conducting and documenting leakage surveys on above and below ground piping utilizing gas detection equipment.",
                             discipline:[2,8],
                             type:4,
                             link:"https://thesource.spectraenergy.com/resource/operational-us/_layouts/15/WopiFrame2.aspx?sourcedoc=https://thesource.spectraenergy.com/resource/operational-us/Standards/Volume_1/1_6020.doc",
                         },
                            {id:6,
                             title:"Pigging and Pig Trap Operation",
                             description:"Procedure describing pigging and pig trap operation.",
                             discipline:[2,9,10],
                             type:3, 
                             link:"https://thesource.spectraenergy.com/resource/operational-us/_layouts/15/WopiFrame2.aspx?sourcedoc=https://thesource.spectraenergy.com/resource/operational-us/Standards/Volume_1/1_5030.doc",
                         }
                         ],
           
            });
        
        
        

        },

        afterModel:function(resolvedModel, transitions){
          
            this.transitionTo('home');
        }
});
