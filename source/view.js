function View() {
  //list down all HTML elements we're manipulating
  this.groceryList = $("#grocery_list");
  this.items = $(".item"); //"items" bc it's a class .item
  //list elements that we will attach to
  this.totalCost= $("#total_cost");

};

View.prototype = {
  appendItem: function(itemNode) {
    this.groceryList.append(itemNode);
    item = {
      name: $(itemNode).find('.item_name').text(),
      price: parseFloat($(itemNode).find('.item_price').text())
    }
    return item;
  },
  appendTotal: function(totalPrice) { //pass totalPrice from model
    this.totalCost.text(totalPrice);
  }
}
