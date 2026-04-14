import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NotebookSettingsController extends Controller {
  @service notebook;
  @service router;

  @action
  updateNotebookName(notebookId, e) {
    console.log(e.target.value);
    this.notebook.updateNoteBookName(notebookId, e.target.value);
  }

  @action
  deleteNotebook(notebookId) {
    if (window.confirm('Are you Sure want to Delete?')) {
      this.notebook.deleteNoteBook(notebookId);
      this.router.transitionTo('notebooks');
    }
  }
}
