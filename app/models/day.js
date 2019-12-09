import DS from "ember-data";

export default DS.Model.extend({
  dt_txt: DS.attr(),
  dt: DS.attr(),
  main: DS.attr()
});
