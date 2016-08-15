import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveNewAnnouncement() {
      var params = {
        text: this.get('text'),
        category: this.get('category')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveNewAnnouncement', params);
    }
  }
});
