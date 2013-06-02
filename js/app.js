var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id'});
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return App.Post.find();
  }
});

// Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  text: DS.attr('string')
});

App.Post.FIXTURES = [
  {
    id: 1,
    title: "First Post!",
    author: "Einar Jónsson",
    text: "So, how about them apples?"
  },
  {
    id: 2,
    title: "Here we go again",
    author: "Whitesnake",
    text: "I don't know where I'm going"
  }
];
