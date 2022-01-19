import { createRouter, createWebHistory } from '@ionic/vue-router';
import routes from './routes';
import before from './before';



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(before);

export default router
