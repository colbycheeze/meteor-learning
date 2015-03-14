HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
    this.subscribe('todos');
  },

  action: function() {
    this.render('Home');
  }
});
