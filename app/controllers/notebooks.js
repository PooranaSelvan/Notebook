import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NotebooksController extends Controller {
  @tracked isCreating;
  @service notebook;

  @tracked filteredNotebooks = [];
  @tracked isSearching = false;

  @action
  toggleIsCreating(e) {
    e.preventDefault();
    this.isCreating = !this.isCreating;
  }

  @action
  searchNotebooks(e) {
    if (e.target.value) {
      this.isSearching = true;
      this.filteredNotebooks = this.model
        .toArray()
        .filter((notebook) =>
          notebook.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
    } else {
      this.isSearching = false;
    }
  }

  @action
  updateNotebookName(notebookId, e) {
    // console.log(e.target.value);
    this.notebook.updateNoteBookName(notebookId, e.target.value);
  }

  @action
  deleteNotebook(notebookId) {
    if (window.confirm('Are you Sure want to Delete?')) {
      this.notebook.deleteNoteBook(notebookId);
    }
  }
}
