import Route from '@ember/routing/route';


export default Route.extend({
  // forecast?q=lisbon&APPID=4a5ec359b905fb9b4bec4bef0ac66361
  model() {
    return this.store.queryRecord('forecast', {id: 1, city: "Lisbon"}, { }).then((result) => {
      console.log(result);
      return result ;
    });
  },

  pathForType(){
    return ''
  }

});
