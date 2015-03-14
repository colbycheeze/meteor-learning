/*****************************************************************************/
/* TodosList: Event Handlers */
/*****************************************************************************/
Template.TodosList.events({
});

/*****************************************************************************/
/* TodosList: Helpers */
/*****************************************************************************/
Template.TodosList.helpers({
  todos: function() {
    return Todos.find({userId: Meteor.userId()}, {
      sort: { createdAt: -1 }
    });
  },

  isDoneClass: function() {
    return this.isDone ? 'done' : '';
  }
});

/*****************************************************************************/
/* TodosList: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosList.created = function () {
};

Template.TodosList.rendered = function () {
};

Template.TodosList.destroyed = function () {
};
