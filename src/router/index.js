import Vue from 'vue';
import Router from 'vue-router';
import homepage from '@/components/Homepage';
import kontakt from '@/components/Kontakt';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: homepage,
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: kontakt,
    },
  ],
});
