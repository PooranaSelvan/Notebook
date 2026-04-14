import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NoteRoute extends Route {
  @service notebook;
  @service store;

  async model(params) {
    let note = await this.store.peekRecord('note', params.noteId);
    return { notebookId: this.paramsFor('notebook').notebookId, note };
  }
}
