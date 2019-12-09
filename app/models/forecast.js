import DS from 'ember-data';


export default DS.Model.extend({
  cod: DS.attr(),
  message: DS.attr(),
  cnt: DS.attr(),
  list: DS.attr(),
  city: DS.attr()
});

