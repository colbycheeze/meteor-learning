/*****************************************************************************/
/* TodosDetail: Event Handlers */
/*****************************************************************************/
Template.TodosDetail.events({
  'submit form': function(e, tmpl) {
    e.preventDefault();

    var subject = tmpl.find('input[name=subject]').value;
    var description = tmpl.find('textarea[name=description]').value;
    var id = this._id;

    Todos.update({_id: id}, {
      $set: {
        subject: subject,
        description: description,
        updatedAt: new Date
      }
    });

    Router.go('todos.detail', {_id: id});
  }
});

/*****************************************************************************/
/* TodosDetail: Helpers */
/*****************************************************************************/
Template.TodosDetail.helpers({
  isMyTodo: function() {
    return this.userId === Meteor.userId();
  }
});

/*****************************************************************************/
/* TodosDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosDetail.created = function () {
};

Template.TodosDetail.rendered = function () {
};

Template.TodosDetail.destroyed = function () {
};
