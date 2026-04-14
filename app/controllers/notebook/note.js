import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NoteController extends Controller {
  @service notebook;

  @action
  updateNoteName(noteId, e) {
    this.notebook.updateNotePadName(noteId, e.target.value);
  }

  @action
  updateNoteContent(noteId, e) {
    this.notebook.updateNotePadContent(noteId, e.target.value);
  }

  @action
  updateNote(noteId, noteName, noteContent) {
    this.notebook.updateNotePad(noteId, noteName, noteContent);
  }
}
