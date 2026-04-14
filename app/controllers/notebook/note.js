import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NoteController extends Controller {
  @service notebook;

  @tracked noteName = this.model.note.name;
  @tracked noteContent = this.model.note.content;

  @action
  updateNoteName(e) {
    this.noteName = e.target.value;
  }

  @action
  updateNoteContent(e) {
    this.noteContent = e.target.value;
  }

  @action
  saveNote(noteId) {
    this.notebook.updateNotePad(noteId, this.noteName, this.noteContent);
    alert("Saved Successfully!");
  }
}
