import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default Controller.extend({

  findText: "",

  @tracked errorMsg: "",

  actions: {
    getCityForecast() {
      return this.store.queryRecord('forecast', {id: 1, city: this.findText}, {}).then((result) => {
        // console.log(result);
        this.errorMsg = "";
        return result;
      }).catch( () =>
        this.errorMsg = "Cidade não encontada"
      )
    }
  },


  toCelcius: function (temp) {
    return temp -273.15;
  }
});
