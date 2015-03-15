/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('todos', function (/* args */) {
  return Todos.find({userId: this.userId});
});

Meteor.publish('todo', function (id) {
  var todo = Todos.findOne({_id: id});
  return [
    Meteor.users.find({_id: todo.userId}, {fields: {profile: 1}}),
    Todos.find({_id: id})
  ];
});

Meteor.publish('users', function (/* args */) {
  return Meteor.users.find({}, {fields: { profile: 1 }});
});

Meteor.publish('user', function (userId) {
  return [
    Meteor.users.find({_id: userId}, {fields: {profile: 1}}),
    Todos.find({userId: userId})
  ];
});
