import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.openweathermap.org/data/2.5',

  queryRecord: function query(store, type, query) {
    // let main = query.filter.forum;
    // let url = `${this.get('host')}/forums/${main}/categories`;
    console.log('query');
    console.log(query);

    console.log('type');
    console.log(type);

    console.log('store');
    console.log(store);

    let url = `${this.get('host')}/forecast?q=${query.city}&APPID=4a5ec359b905fb9b4bec4bef0ac66361`;
    return this.ajax(url, 'GET', {data: query});
  }

});
