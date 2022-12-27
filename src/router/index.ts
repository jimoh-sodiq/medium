import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "@/modules/home/routes/home-routes";
import postRoutes from "@/modules/posts/routes/post-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...homeRoutes, ...postRoutes],
});

export default router;
