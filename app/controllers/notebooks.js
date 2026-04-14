import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NotebooksController extends Controller {
  @tracked isCreating;
  @service notebook;
  @service store;

  @tracked isSearching = false;
  @tracked filteredAll = [];

  notebooks = this.store.findAll('notebook');
  note = this.store.findAll('note');

  @action
  toggleIsCreating(e) {
    e.preventDefault();
    this.isCreating = !this.isCreating;
  }

  @action
  searchGlobal(e) {
    let query = e.target.value;

    if (!query) {
      this.isSearching = false;
      this.filteredAll = [];
      return;
    }

    this.isSearching = true;
    query = query.toLowerCase();

    let notebooks = this.notebooks.toArray();
    let notes = this.note.toArray();

    let res = [];

    for (let i = 0; i < notebooks.length; i++) {
      let notebook = notebooks[i];
      let notebookName = notebook.name.toLowerCase();
      let matchedNotes = [];

      for (let j = 0; j < notes.length; j++) {
        let note = notes[j];

        let noteName = note.name.toLowerCase();
        let noteContent = note.content.toLowerCase();
        let noteNotebookId = note.get('notebook.id');

        if (noteNotebookId === notebook.id) {
          if (noteName.includes(query) || noteContent.includes(query)) {
            matchedNotes.push(note);
          }
        }
      }

      let notebookMatch = notebookName.includes(query);

      if (notebookMatch || matchedNotes.length > 0) {
        res.push({
          notebook: notebook,
          notes: matchedNotes
        });
      }
    }
    this.filteredAll = res;
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
