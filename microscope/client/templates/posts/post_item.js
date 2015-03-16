Template.postItem.events({
  'click .upvotable': function(e, template) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  },

});

Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },

  domain: function() {
    var a = document.createElement('a'); a.href = this.url;
    return a.hostname;
  },

  upvotedClass: function() {
    var userId = Meteor.userId();
    if(userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  }
 });
