/*****************************************************************************/
/* CommentsList: Event Handlers */
/*****************************************************************************/
Template.CommentsList.events({
  'submit form.new-comment': function(e, tmpl) {
    e.preventDefault();

    var todo = this;
    var form = tmpl.find('form.new-comment');
    var body = tmpl.find('textarea[name=body]').value;

    Comments.insert({
      todoId: todo._id,
      createdAt: new Date,
      userId: Meteor.userId(),
      body: body
    });

    form.reset();
  }
});

/*****************************************************************************/
/* CommentsList: Helpers */
/*****************************************************************************/
Template.CommentsList.helpers({
  comments: function() {
    var comment = this;
    return Comments.find({todoId: comment._id}, { sort: {createdAt: -1}});
  },

  user: function() {
    var comment = this;
    return Meteor.users.findOne({_id: comment.userId});
  },

  timestamp: function() {
    var comment = this;
    return moment(comment.createdAt).fromNow();
  }

});

/*****************************************************************************/
/* CommentsList: Lifecycle Hooks */
/*****************************************************************************/
Template.CommentsList.created = function () {
};

Template.CommentsList.rendered = function () {
};

Template.CommentsList.destroyed = function () {
};
