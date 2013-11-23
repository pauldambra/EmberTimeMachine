App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.Day = Ember.Object.extend({
  date: function() {
    return moment().day(this.get('dayName')).format('MMM Do');
  }.property()
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
      FocusDate: new Date(),
      Days: [
    	App.Day.create({dayName:'Monday'}), 
    	App.Day.create({dayName:'Tuesday'}), 
    	App.Day.create({dayName:'Wednesday'}), 
    	App.Day.create({dayName:'Thursday'}), 
    	App.Day.create({dayName:'Friday'})
      ]
    };
  }
});

Ember.Handlebars.registerBoundHelper('currentDate', function(format) {
  return moment().format(format);
});