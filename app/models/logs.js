import DS from 'ember-data';

export default DS.Model.extend({
  logType: DS.belongsTo('log-type'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  data: DS.attr('string'),
  user: DS.belongsTo('user')
});
