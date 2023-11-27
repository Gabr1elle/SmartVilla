import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
    
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( '../views/DashboardView.vue')
    
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: () => import( '../views/CadastrarView.vue')
    
  },
  {
    path: '/dados',
    name: 'dados',
    component: () => import( '../views/Dados.vue')
    
  },
  {
    path: '/folhapagamento',
    name: 'folhapagamento',
    component: () => import( '../views/FolhaPagamento.vue')
    
  },
  {
    path: '/holerite',
    name: 'holerite',
    component: () => import( '../views/Holerite.vue')
    
  },
  {
    path: '/folhaponto',
    name: 'folhaponto',
    component: () => import( '../views/FolhaPonto.vue')
    
  },
  {
    path: '/ferias',
    name: 'ferias',
    component: () => import( '../views/Ferias.vue')
    
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: () => import( '../views/Relatorios.vue')
    
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
