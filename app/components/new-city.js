import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    saveNewCity() {
      var params = {
        name: this.get('cityName')
      };
      this.set('addNewCity', false);
      this.sendAction('saveNewCity', params);
    }
  }
});
