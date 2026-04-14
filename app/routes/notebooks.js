import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotebooksRoute extends Route {
  @service notebook;

  model() {
    return this.notebook.loadNoteBooks();
  }
}
