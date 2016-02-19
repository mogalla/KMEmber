import Ember from 'ember';
//this component is the dropdown component
export default Ember.Component.extend({
	init:function(){
		this.setProperties({
			//initializing reveal to false
			reveal:false,
			
			
		});

		this._super();
	},



	actions:{
		//this function is called when the dropdown is clicked
		//hides/shows the options based on the reveal property
		revealHideOptions:function(){
			if(this.reveal){
				Ember.set(this,'reveal',false);
			}else{
				Ember.set(this,'reveal',true);
			}
		},

       //this function is called when the dropdown selection is changed
       //sets the selected item and then sends the event to the controller
		optionSelected:function(item){
			//set selected item and hide the dropdown options
			Ember.set(this,'selected',item);
			Ember.set(this,"reveal",false);
			//send event to controller
			this.sendAction('action', item);
			
		}

	}
});
