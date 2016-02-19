import Ember from 'ember';

export default Ember.Controller.extend({
	content: Ember.inject.controller('application'),
	
	init:function(){
		//get all the properties from the application route
		
		Ember.set(this,'nav',this.get('model').model.nav);
		Ember.set(this,'tabs',this.get('model').model.tabs);
		Ember.set(this,'helpcontent',this.get('model').model.helpcontent);
		this._super();


	},

	partitionContent:function(){
			//partition content into different tabs
			var tabs=this.tabs;
			var i,iL;
			iL=tabs.length;

			for(i=0;i<iL;i++){

				var tabcontent=this.displayedcontent.filterBy('type',tabs[i].id);
				if(tabs[i].label=="All"){tabcontent=this.displayedcontent;}
				Ember.set(tabs[i],'content',tabcontent);
				Ember.set(tabs[i],'contentlength',tabcontent.length);
			}
			Ember.set(this,'tabs',tabs);
		},



	actions:{
		//this function handles the event sent by the dropdown component
		//it sets the current category which inturn changes the items displayed in the left nav
		disciplineChanged:function(discipline){
			Ember.set(this,'category',discipline);
			this.send('filterbytopic',discipline);
			Ember.set(this,'filteredcontent',this.displayedcontent);
			this.partitionContent();
			
		},
        //this function handles changes to the left nav topic selections
		topicChanged:function(topic){
			this.send('filterbytopic',topic);
			this.partitionContent();
		},

		tabChanged:function(tab){
			//this.send('filterbytype',tab);
			Ember.set(this,'displayedcontent',tab.content);
		},

		filterbytopic:function(topic){
			var currentcontent=this.helpcontent;
			currentcontent.setEach('isselected',false);
			var i,iL;
			var displayedcontent=[];
			iL=currentcontent.length;
			for(i=0;i<iL;i++){
				if(currentcontent[i].discipline.indexOf(topic.id)!==-1){
					displayedcontent.push(currentcontent[i]);
				}
			}
			this.tabs.setEach('isactive','inactive');
			Ember.set(this.tabs[0],'isactive','active');
			Ember.set(this,'tabs',this.tabs);
			
			Ember.set(this,'displayedcontent',displayedcontent);

		},

		filterbytype:function(type){
			var currentcontent=this.displayedcontent;
			this.displayedcontent.setEach('isselected',false);
			if(type.label==="All"){
				Ember.set(this,'displayedcontent',currentcontent);
			}else{
				var displayedcontent=currentcontent.filterBy('type',type.id);
				Ember.set(this,'displayedcontent',displayedcontent);
			}
			
		},

		



	}

});
