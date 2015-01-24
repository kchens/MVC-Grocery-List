function Controller(List, View) {
  this.list = List;
  this.view = View;
  this.node = null;
};

Controller.prototype = {

  makeItemDraggable: function() {
    var self = this;
    this.view.items.draggable({
      helper: "clone",
      scope: 'items',
      start: function( event, ui) {
        self.node = $(event.target).clone();
      }
    })
  },
  makeListDroppable: function() {
    var self = this;
    //dropping into the groceryList jQuery object
    this.view.groceryList.droppable({
      scope: 'items',
      drop: function() {
        //puts in HTML of the item
        var item = self.view.appendItem(self.node);
        //pulls out HTML items, then puts them into objects
        self.list.addItem(item.name, item.price);
        var totalPrice = self.list.calculateTotal();
        self.view.appendTotal(totalPrice);
        console.log("end")
      }
    })
  },
  start: function() {
    this.makeItemDraggable();
    this.makeListDroppable();
  }
}
