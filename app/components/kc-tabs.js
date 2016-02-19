import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		tabChanged:function(tab){
			//set the clicked tab as active
			this.tabs.setEach('isactive','inactive');
			Ember.set(tab,'isactive','active');
			//send the event to the controller
			this.sendAction('action', tab);
		}

	}
});
