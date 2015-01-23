/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */

$(document).ready(function() {
  Manager.start();
});

// Model
function Item(name, price) {
  this.name = name;
  this.price = price;
};

function List() {
  this.items = [];
  this.totalPrice;
};

List.prototype = {
  addItem: function() {
    //add item to List.items collection
  },
  calculateTotal = function () {
    //iterates through array and adds up each items price
  }
};

// Controller
function Display() {
  //list down all HTML elements we're manipulating
  this.groceryList = "#grocery_list";
  this.item = ".item";
  //list elements that we will attach to
  this.totalCost= "#total_cost";
};

Display.prototype = {
  appendItem: function() {
    //add item name to groceryList
    //add item price to groceryList
  },
  appentTotal: function() {
    //display current state of
  }
}

// View
function Controller(List, Display) {
  this.List = List;
  this.Display = Display;
  this.node = null;
};

Controller.prototype.start = function () {
  makeItemDraggable: function() {},
  makeListDroppable: function() {}
}


var manager = new Controller();