import { createRouter, createWebHistory } from 'vue-router'
//routes
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import MainCategory from '../views/MainCategory.vue'
import InsideProduct from '../views/InsideProduct.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import SearchPage from '../views/SearchPage.vue'
import MainPanel from '../views/MainPanel.vue'
import MainPanelPart from '../views/MainPanelPart.vue'
import PanelOnProgress from '../views/PanelOnProgress.vue'
import EditProfile from '../views/EditProfile.vue'
import PayingPage from '../views/PayingPage.vue'
import PayingFirstPage from '../views/PayingFirstPage.vue'
import PayingSecondPage from '../views/PayingSecondPage.vue'
import AddHome from '../views/AddHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category',
    name: 'category',
    component: MainCategory
  },
  {
    path: '/product/:id',
    name: 'product',
    component: InsideProduct
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/search/:id',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/addhome',
    name: 'addhome',
    meta: { requiresAuth: true },
    component: AddHome
  },
  {
    path: '/payingpage',
    name: 'payingpage',
    component: PayingPage,
    meta: { requiresAuth: true },

    children:[
      {path:'',name:'viewpaying',component:PayingFirstPage},
      {path:'/payingpage/lastpay',name:'viewpaying2',component:PayingSecondPage},
    ],
  },
  {
    path: '/panel',
    name: 'panel',
    component: MainPanel,
    meta: { requiresAuth: true },

    children:[
      {path:'' ,name:'saved', component:MainPanelPart},
      {path:'/panel/progress' ,name:'progress', component:PanelOnProgress},
      {path:'/panel/editprofile' ,name:'EditProfile', component:EditProfile}
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{

  if((to.meta.requiresAuth===true && store.state.currentUser==null) || ((to.fullPath==='/login' || to.fullPath==='/signup') && store.state.currentUser!=null)){
    next('/')
    return
  }

  next()
})
export default router
