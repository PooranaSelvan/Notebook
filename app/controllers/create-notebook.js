import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CreateNotebookController extends Controller {
  @service notebook;
  #noteBookName;
  @service router;

  @action
  updateFormName(e) {
    this.#noteBookName = e.target.value;
  }

  @action
  createNoteBook(e) {
    e.preventDefault();
    if (this.#noteBookName.isEmpty || this.#noteBookName.length > 12) {
      alert('Notebook Name Empty or Greater than 12 Characters!');
      return;
    }

    this.notebook.createNoteBook(this.#noteBookName);
    this.router.transitionTo('notebooks');
  }
}
