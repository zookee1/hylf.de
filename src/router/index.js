import Vue from 'vue';
import Router from 'vue-router';
import homepage from '@/components/Homepage';
import contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: homepage,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact,
    },
  ],
  mode: 'history',
});
