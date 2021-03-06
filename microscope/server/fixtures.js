if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  //create some users
  var colbyId = Meteor.users.insert({
    profile: { name: 'Colby Williams' }
  });
  var colby = Meteor.users.findOne(colbyId);

  var panthId = Meteor.users.insert({
    profile: { name: 'Pantheon' }
  });
  var panth = Meteor.users.findOne(panthId);

  var blogId = Posts.insert({
    title: 'ColbyCheeZe - Productivity for Programmers',
    userId: colby._id,
    author: colby.profile.name,
    url: 'http://colbycheeze.com/blog',
    submitted: new Date(now - 7 * 3600 * 1000),
    upvoters: [],
    votes: 0,
    commentsCount: 2
  });

  Comments.insert({
    postId: blogId,
    userId: panth._id,
    author: panth.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Nice blog Colby...FOR ME TO STEP ON!'
  });

  Comments.insert({
    postId: blogId,
    userId: colby._id,
    author: colby.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'Wow Pantheon, more like MANtheon'
  });

  Posts.insert({
    title: 'Todo Woohoo - My first meteor app',
    url: 'http://colby-todo-woohoo.meteor.com',
    userId: colby._id,
    author: colby.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    upvoters: [],
    votes: 0,
    commentsCount: 0
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    userId: panth._id,
    author: panth.profile.name,
    submitted: new Date(now - 10 * 3600 * 1000),
    upvoters: [],
    votes: 0,
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book - How I learned Meteor',
    url: 'http://themeteorbook.com',
    userId: colby._id,
    author: colby.profile.name,
    submitted: new Date(now - 12 * 3600 * 1000),
    votes: 0,
    commentsCount: 0
  });

  Posts.insert({
    title: 'Evented Mind - My other resource for learning Meteor',
    url: 'http://eventedmind.com',
    userId: colby._id,
    author: colby.profile.name,
    submitted: new Date(now - 6 * 3600 * 1000),
    votes: 0,
    commentsCount: 0
  });

  for (var i = 1; i < 11; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: colby.profile.name,
      userId: colby._id,
      url: 'http://google.com?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000 * 50),
      upvoters: [],
      votes: 0,
      commentsCount: 0
    });
  }
}
