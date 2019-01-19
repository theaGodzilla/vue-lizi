import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@com/Home';
import List from '@com/List';
import Circle from '@com/Circle';
import Cart from '@com/cart/Cart';
import Person from '@com/person/Person';
import Login from '@com/Login';
import Reg from '@com/Reg';
import Classify from '@com/Classify';


export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
 
  ]
})
