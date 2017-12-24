import Vue from 'vue';
import Component from 'vue-ts-component';

@Component({
  name: 'HelloWorld',
  template: require('./HelloWorld.html'),
  style: require('./HelloWorld.scss'),
  scoped: true
})
export default class HelloWorld extends Vue {
  public msg = 'Welcome to Your Vue.js App.';
}

