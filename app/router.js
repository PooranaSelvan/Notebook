import EmberRouter from '@ember/routing/router';
import config from 'notes/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('notebooks');
  this.route('notebook', { path: '/notebook/:notebookId' }, function () {
    this.route('note', { path: '/note/:noteId' });
  });

  this.route('create-notebook');
  this.route('notebook-settings', { path: "/notebook-settings/:notebookId" });
});
