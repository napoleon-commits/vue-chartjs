import Vue from 'vue'
import UpdatingChart from './components/UpdatingChart'

Vue.config.productionTip = false

new Vue({
  render: h => h(UpdatingChart),
}).$mount('#app')
