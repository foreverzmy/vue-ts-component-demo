import Vue from 'vue';
import Component from 'vue-ts-component';

import HelloWorld from './components/HelloWorld';

@Component({
  name: 'app',
  template: require('./App.html'),
  style: require('./style.scss'),
  components: { HelloWorld }
})
export default class App extends Vue {

}
