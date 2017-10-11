import Vue from 'vue';

const bus = new Vue;
export default bus;

// Events
export const dbEvents = {
  dbupdate: 'dbupdate',          // Whenever the DB updates
  deletecancel: 'deletecancel',  // Whenever the user cancels a delete
  dialogcancel: 'dialogcancel',  // Whenever a dialog box is cancelled
  dialogsubmit: 'dialogsubmit',  // Whenever a dialog box is confirmed
  dialogupdate: 'dialogupdate',  // Whenever a dialog box needs to open
  trackdelete: 'trackdelete',    // Whenever a track is deleted
  trackupdate: 'trackupdate'    // Whenever a new track begins playing
};
