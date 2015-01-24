$(document).ready(function() {
  var list = new List();
  var view = new View();
  var Manager = new Controller(list, view);

  Manager.start();
});

