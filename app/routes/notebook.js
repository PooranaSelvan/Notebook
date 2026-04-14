import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotebookRoute extends Route {
  @service notebook;
  @service store;

  model(params) {
    let notebook = this.store.peekRecord('notebook', params.notebookId);
    return { notebookId: params.notebookId, notebook };
  }
}
