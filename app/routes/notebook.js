import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotebookRoute extends Route {
  @service notebook;
  @service store;

  async model(params) {
    let notebook = await this.store.peekRecord('notebook', params.notebookId);
    return { notebookId: params.notebookId, notebook };
  }
}
