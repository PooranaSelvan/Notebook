import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotebookSettingsRoute extends Route {
     @service notebook;


     async model(params) {
          return await this.store.peekRecord('notebook', params.notebookId);
     }
}
