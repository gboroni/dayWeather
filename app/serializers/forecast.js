import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'cod',

  normalizeResponse(store,primaryModelClass, payload, id, requestType) {
    // payload = {forecast: payload}
    payload = {forecast: payload};

    console.log(payload);




    return this._super(store,primaryModelClass, payload, id, requestType);
  }
});
