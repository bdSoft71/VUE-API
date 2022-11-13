import { createRouter, createWebHistory } from 'vue-router'
//import Router from 'vue-router'
//import HomeView from '../views/frontend/FrontendMaster.vue'
//import FrontendMaster from '../views/frontend/frontend-master.vue'

const routes = [
  {
    path: '/',
    name: 'frontend-master',
    component:()=>import('../views/frontend/frontend-master.vue'),
    redirect:{ path:'/home'},
    children:[
      {
        path:'home',
        name:'home',
        component:()=>import('../views/frontend/home/home.vue'),
      },
      {
        path:'product-details/:product_id',
        name:'product_details',
        component:()=>import('../views/frontend/home/product-details.vue'),
      },
     
      {
        path:'log-out',
        name:'log-out',
        component:()=>import('../views/frontend/Auth/logout.vue'),
      }
    ]
    
  },
  {
    path:'/admin-login',
    name:'admin-login',
    component:()=>import('../views/frontend/Auth/auth-master.vue'),
    redirect:{ path:'/admin-login/login'},
    children:[
      {
        path:'login',
        name:'login',
        component:()=>import('../views/frontend/Auth/login.vue'),
      },
      {
        path:'register',
        name:'register',
        component:()=>import('../views/frontend/Auth/Register.vue'),
      },

    ]
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:()=>import('../views/admin/admin-master.vue'),
    children:[
      {
        path:'add-category',
        name:'add-category',
        component:()=>import('../views/admin/category/add_category.vue'),
      },
      {
        path:'all-category',
        name:'all-category',
        component:()=>import('../views/admin/category/all-categories.vue'),
      },
      {
        path:'edit-category/:category_id',
        name:'edit-category',
        component:()=>import('../views/admin/category/edit_category.vue'),
      },
      {
        path:'all-products',
        name:'all-products',
        component:()=>import('../views/admin/product/all-products.vue'),
      },
    ],
  },
 
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history'
})

export default router
