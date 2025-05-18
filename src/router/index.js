import { createRouter, createWebHistory } from 'vue-router'
import Articles from '../components/Articles.vue'
import Detail from '../components/Detail.vue'
import Post from '../components/Post.vue'
import Account from '../components/Account.vue'
import Update from '../components/Update.vue'

import { account, nextUri } from '../data/data'


const routes = [
  { path: '/',name: "Home", component: Articles },
  { path: '/detail/:id', component: Detail , props: true },
  { path: '/detail/cmt/:id', name:"cmt", component: Detail , props: true, 
    beforeEnter: (to, from, next) => {
      if (account.fullName) {
        next();
      }else 
        openModal('myModal');
    }
  },
  { path: '/post', component: Post,
    beforeEnter: (to, from, next) => {
      if (account.fullName) {
        next();        
      }else 
        openModal('myModal');
        nextUri.value = "/post";
    }
  },
  { path: '/account', component: Account,
    beforeEnter: (to, from, next) => {
      if (account.fullName) {
        next();
      }else 
        openModal('myModal');
        nextUri.value = "/account"
    }
   },
  { path: '/update/:id', component: Update, props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';  
    modal.classList.add('active');  
  }
}

