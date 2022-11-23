import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import ContactView from "../views/ContactView.vue";
import AgentsView from "../views/AgentsView.vue";
import AgentView from "../views/AgentView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contacts",
    name: "contacts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListView,
  },
  {
    path: "/contact/:id",
    name: "contact_view",
    component: ContactView,
  },
  {
    path: "/agent/:id",
    name: "agent_view",
    component: AgentView,
  },
  {
    path: "/agents/",
    name: "agents_view",
    component: AgentsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
