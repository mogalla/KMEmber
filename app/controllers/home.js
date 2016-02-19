import Ember from 'ember';

export default Ember.Controller.extend({
	//needs:['application'],
	content: Ember.inject.controller('application'),
	

	actions:{
		//handles click on the discipline on the home page
		categorySelected:function(discipline){
			//console.log(category);
			this.transitionToRoute('helpcontent',discipline);
		}

	}
});
