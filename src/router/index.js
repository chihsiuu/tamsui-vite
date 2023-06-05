import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const HomeView = () => import("../views/HomeView.vue");
const SceneView = () => import("../views/SceneView.vue");
const EnjoyView = () => import("../views/EnjoyView.vue");
const VoteView = () => import("../views/VoteView.vue");
const OutstandingView = () => import("../views/OutstandingView.vue");
const NotFound = () => import("../views/404.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/scene",
      name: "scene",
      component: SceneView,
    },
    {
      path: "/vote",
      name: "vote",
      component: VoteView,
    },
    {
      path: "/outstanding",
      name: "outstanding",
      component: OutstandingView,
    },
    {
      path: "/",
      children: [
        { path: "/eat", name: "eat", component: EnjoyView, alias: "/eat" },
        { path: "/play", name: "play", component: EnjoyView, alias: "/play" },
        { path: "/stay", name: "stay", component: EnjoyView, alias: "/stay" },
        { path: "/buy", name: "buy", component: EnjoyView, alias: "/buy" },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "404", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, left: 0 };
  },
});

export default router;
