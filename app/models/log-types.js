import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  hasDuration: DS.attr('boolean')

  logs: DS.hasMany('log'),
});
