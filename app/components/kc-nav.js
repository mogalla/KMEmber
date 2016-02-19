import Ember from 'ember';
//left nav component
//accepts the nav in tree structure, recurses in the view to display children
export default Ember.Component.extend({
	init:function(){
		this.setProperties({

			items:this.allitems,
			reveal:false,
		});
		this._super();
	},

	actions:{
		//handles the click event from the nav item
		//hides other subitems if another toplevel is selected
		//then sends the event to controller so that the content can be filtered
		topicChanged:function(item){
			
			this.hideOtherItems(item);
			//expand the menu
			if(this.isSubmenuShown(item)){
				this.hideSubMenu(item);
			}else{
				this.showSubMenu(item);
			}

			//make current item active
			this.inactivateOtherItems(item);
			this.activateItem(item);
			//send this event to the controller to handle it
			this.sendAction('action', item);
		},

		
	},

	
	isSubmenuShown:function(item){
		return (item.isRevealed==="show");
	},

	showSubMenu:function(item){
		Ember.set(item,"isRevealed","show");
	},

	hideSubMenu:function(item){
		Ember.set(item,"isRevealed","hide");
	},

	inactivateItem:function(item){
		Ember.set(item,"isactive","inactive");
	},

	activateItem:function(item){
		Ember.set(item,"isactive","active");
	},

   //this function hides the submenus of all the other items other than the currently selected item
	hideOtherItems:function(currentItem){
		//hide all items excluding the current item
		var items=this.allitems;
		var i,iL;
		iL=items.length;
		for(i=0;i<iL;i++){
			//do not hide if the element is a parent of current item
			/*var isparent=(items[i].children.findBy("id",currentItem.id)===undefined?false:true);
			if(!isparent && items[i].id!==currentItem.id){
				this.hideSubMenu(items[i]);
			}*/
			this.hideMenu(items[i],currentItem);
		}

	},

    //hide all items excluding the current item
	//this needs to be a recursion -change code to recurse later
	inactivateOtherItems:function(currentItem){
		
		var items=this.allitems;

		var i,iL,j,jL;
		iL=items.length;
		for(i=0;i<iL;i++){
			
			this.setInactiveStatus(items[i],currentItem);
		}
	},

	setInactiveStatus:function(item,selectedItem){
		var j,jL;
		if(item.id!==selectedItem.id){
				this.inactivateItem(item);
			}
			//check children too
			var children=item.children;
			jL=children.length;
			for(j=0;j<jL;j++){
				this.setInactiveStatus(children[j],selectedItem);
				
			}
	},

	hideMenu:function(item,selectedItem){
		//do not hide if the element is a parent of current item
		var j,jL;
			var isparent=(item.children.findBy("id",selectedItem.id)===undefined?false:true);
			if(!isparent && item.id!==selectedItem.id){
				this.hideSubMenu(item);
			}

			var children=item.children;
			jL=children.length;
			for(j=0;j<jL;j++){
				this.hideMenu(children[j],selectedItem);
				
			}
	}


});
