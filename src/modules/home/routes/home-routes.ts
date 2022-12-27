import type { RouteRecordRaw } from "vue-router";
import TheHome from "../views/TheHome.vue";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: TheHome,
  },
  {
    path: "/creators",
    name: "creators",
    component: () => import("../views/TheCreators.vue"),
  },
  {
    path: "/membership",
    name: "membership",
    component: () => import("../views/TheMembership.vue"),
  },
  {
    path: "/our-story",
    name: "story",
    component: () => import("../views/OurStory.vue"),
  },
];

export default homeRoutes;
