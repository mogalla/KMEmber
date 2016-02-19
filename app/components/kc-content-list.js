import Ember from 'ember';
//this will handle changes to category/tabs  
export default Ember.Component.extend({
	init:function(){
		this.setProperties({

			items:this.content,
			category:this.selected,
			type:this.type,
			content:this.content,
		});
		this._super();
		
	},

	
	actions:{
				

		showContent:function(item){
			
			this.content.setEach('isselected',false);
			Ember.set(item,'isselected',true);
			Ember.set(this,"source",item.link);
		}

	}
});
