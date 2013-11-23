App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
    	{day:'Monday'}, 
    	{day: 'Tuesday'}, 
    	{day: 'Wednesday'}, 
    	{day: 'Thursday'}, 
    	{day: 'Friday'}, 
    	{day: 'Saturday', weekend:true}, 
    	{day: 'Sunday', weekend:true}];
  }
});
