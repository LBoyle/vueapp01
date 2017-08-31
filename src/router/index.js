import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Images from '@/components/Images';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import NotFound from '@/components/errors/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/images',
      name: 'Images',
      component: Images
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
