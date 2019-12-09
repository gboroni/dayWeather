
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=4a5ec359b905fb9b4bec4bef0ac66361
  host: 'https://api.openweathermap.org/'
  // namespace: 'api/'
})

