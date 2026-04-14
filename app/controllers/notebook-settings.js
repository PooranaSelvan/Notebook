import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NotebookSettingsController extends Controller {
  @service notebook;

  @action
  updateNotebookName(notebookId, e) {
    console.log(e.target.value);
    this.notebook.updateNoteBookName(notebookId, e.target.value);
  }
}
