import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'
import index from '../components/index.vue'
import viewInsuranceDeal from '../components/viewInsuranceDeal/viewInsuranceDeal.vue'
import viewInsurance from '../components/viewInsurance/viewInsurance.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/viewInsuranceDeal',
          name: 'viewInsuranceDeal',
          component: viewInsuranceDeal
        },
        {
          path: '/viewInsurance',
          name: 'viewInsurance',
          component: viewInsurance
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
