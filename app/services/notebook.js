import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NotebookService extends Service {
  @service store;
  @tracked isCreatorForm = false;

  toggleCreatorForm() {
    this.isCreatorForm = !this.isCreatorForm;
  }

  loadNoteBooks() {
    return this.store.peekAll('notebook');
  }

  loadNotebook(notebookId) {
    return this.store.peekRecord('note', notebookId);
  }

  createNoteBook(bookName) {
    let notebook = this.store.createRecord('notebook', {
      name: bookName,
    });

    notebook.save();
  }

  updateNoteBookName(notebookId, bookName) {
    let notebook = this.store.peekRecord('notebook', notebookId);

    if (notebook) {
      notebook.name = bookName;
      notebook.save();
    }
  }

  createNotePad(notebookId, noteName, noteContent) {
    let notebook = this.store.peekRecord('notebook', notebookId);

    let note = this.store.createRecord('note', {
      name: noteName,
      content: noteContent,
      notebook,
    });

    note.save();
  }

  updateNotePadName(noteId, name) {
    let note = this.store.peekRecord('note', noteId);

    if (note) {
      note.name = name;
      note.save();
    }
  }

  updateNotePadContent(noteId, content) {
    let note = this.store.peekRecord('note', noteId);

    if (note) {
      note.content = content;
      note.save();
    }
  }

  updateNotePad(noteId, name, content) {
    let note = this.store.peekRecord('note', noteId);

    if (note) {
      note.name = name;
      note.content = content;
      note.save();
    }
  }

  async deleteNoteBook(notebookId) {
    let notebook = this.store.peekRecord('notebook', notebookId);

    if (notebook) {
      let notes = await notebook.notes;

      for (let note of notes.toArray()) {
        await note.destroyRecord();
      }

      await notebook.destroyRecord();
    }
  }

  deleteNotePad(noteId) {
    let note = this.store.peekRecord('note', noteId);

    if (note) {
      note.destroyRecord();
    }
  }
}
