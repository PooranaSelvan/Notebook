import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NotebookController extends Controller {
  @service notebook;
  @service store;

  @tracked isSearching = false;
  @tracked filteredNotebook = [];

  noteName;
  noteContent;

  @action
  updateCreatorForm() {
    this.notebook.toggleCreatorForm();
  }

  @action
  updateNoteName(e) {
    this.noteName = e.target.value;
  }

  @action
  updateNoteContent(e) {
    this.noteContent = e.target.value;
  }

  @action
  createNotePad(notesId) {
    if (!this.noteName || !this.noteContent) {
      alert('Name and Content Required!');
      return;
    }

    this.notebook.createNotePad(notesId, this.noteName, this.noteContent);
    this.updateCreatorForm();
  }

  @action
  searchNotePad(e) {
    if (e.target.value) {
      this.isSearching = true;
      this.filteredNotebook = this.model.notebook.notes
        .toArray()
        .filter((note) =>
          note.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
    } else {
      this.isSearching = false;
    }
  }

  @action
  deleteNotepad(noteId) {
    if (window.confirm('Are you sure want to Delete?')) {
      this.notebook.deleteNotePad(noteId);
    }
  }
}
