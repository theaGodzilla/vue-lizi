import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

import Home from '@com/Home';
  //Home的子路由
  import Lizi from '@com/homelist/lizi';
  import Top from '@com/homelist/top';
  import Chaoliu from '@com/homelist/chaoliu';
  import Meibai from '@com/homelist/meibai';
  import Bushui from '@com/homelist/bushui';
  import Dizhuang from '@com/homelist/dizhuang';
  import Xifa from '@com/homelist/xifa';
  import Huazhuang from '@com/homelist/huazhuang';
  import Qingcang from '@com/homelist/qingcang'; 
import List from '@com/List';
import Circle from '@com/Circle';
import Cart from '@com/Cart';
import Person from '@com/Person';
import Search from '@com/Search';
import Thelists from '@com/Thelists';
import Detail from '@com/detail';

//

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      // name: 'Home',
      component: Home,
      children:[
        {
          path:'',
          redirect:{name:'Lizi'} //重定向
        },{
          path:'ndckdnksv2312313fcsdfnks',//当url为/Home/ndckdnksv2312313fcsdfnks匹配这个子路由
          name:'Lizi',
          component:Lizi,//局部组件
          // meta:{
          //     requireAuth:true
          // }  将需要登录权限的路由设置这个属性
        },{
          path:'5767c678e4b0edc8bf0af2c1',
          name:'Top',
          component:Top,
        },{
          path:'5767c68ce4b0edc8bf0af2d8',
          name:'Chaoliu',
          component:Chaoliu,
        },{
          path:'5767c5b4e4b0edc8bf0af24c',
          name:'Meibai',
          component:Meibai,
        }
        ,{
          path:'5767c59de4b0edc8bf0af23a',
          name:'Bushui',
          component:Bushui,
        },{
          path:'5767c610e4b0edc8bf0af276',
          name:'Dizhuang',
          component:Dizhuang,
        },{
          path:'5767c636e4b0edc8bf0af286',
          name:'Xifa',
          component:Xifa,
        },{
          path:'5767c950e4b0edc8bf0af456',
          name:'Huazhuang',
          component:Huazhuang,
        },{
          path:'5937bfd6e4b007766ba21e31',
          name:'Qingcang',
          component:Qingcang,
        }
      ]
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
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path:'/thelists',
      name:'Thelists',
      component:Thelists
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail
    }
  ]
})
