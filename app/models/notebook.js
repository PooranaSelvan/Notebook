import Model, { attr, hasMany } from '@ember-data/model';

export default class NotebookModel extends Model {
  @attr name;
  @hasMany('note') notes;
}
