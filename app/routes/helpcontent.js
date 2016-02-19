import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params, transition) {
        return { category: params.category };
    },

    serialize: function(model) {
        return { category: model.id }
    },

    setupController: function(controller, model) {
    	this._super(controller, model);
    	controller.set('category',model);
    	controller.send('disciplineChanged',model);
    }

   
});
