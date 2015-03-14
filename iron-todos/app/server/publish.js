/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('todos', function (/* args */) {
  return Todos.find({userId: this.userId});
});

Meteor.publish('todo', function (id) {
  return Todos.find({_id: id});
});
