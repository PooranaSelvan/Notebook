import Model, { attr, belongsTo } from '@ember-data/model';

export default class NoteModel extends Model {
  @attr name;
  @attr content;
  @belongsTo('notebook') notebook;
}
