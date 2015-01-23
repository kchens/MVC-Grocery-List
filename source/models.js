function Item(name, price) {
  this.name = name;
  this.price = price;
}

function List() {
  this.items = [];
  this.totalPrice = 0;
}

List.prototype = {
  // take in item parameters, not object
  addItem: function(itemName, itemPrice) {
    //add item to List.items collection
    //create item objects instantly
    this.items.push(new Item(itemName, itemPrice));
    // this.calculateTotal();
  },
  calculateTotal: function () {
    //iterates through array and adds up each items price
    this.totalPrice = 0;
    for (var index = 0; index < this.items.length; index++) {
      this.totalPrice += this.items[index].price;
    }
    return this.totalPrice;
  }
};

//Tests

// var groceriesList = new Model();
// groceriesList.addItem("apple", 1);
// groceriesList.total == 1;

// groceriesList.addItem("orange", 2);
// groceriesList.total == 3;
