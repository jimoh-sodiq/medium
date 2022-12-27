import type { RouteRecordRaw } from "vue-router";

const postRoutes: RouteRecordRaw[] = [
  {
    path: "/posts",
    name: "posts",
    component: () => import("../views/index.vue"),
  },
];

export default postRoutes;
