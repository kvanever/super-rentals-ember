import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement'),
      cities: this.store.findAll('city')
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'rentals', model.rentals);
    Ember.set(controller, 'announcements', model.announcements);
    Ember.set(controller, 'cities', model.cities);
  },
  actions: {
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    },
    saveNewCity(params) {
      var newCity = this.store.createRecord('city',params);
      newCity.save();
      this.transitionTo('index');
    },
    saveNewAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    }
  }
});
