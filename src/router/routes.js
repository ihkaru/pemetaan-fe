const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "login",
        name: "auth.login",
        component: () => import("pages/auth/LoginPage.vue"),
      },
      {
        path: "map",
        component: () => import("layouts/MapLayout.vue"),
        children: [
          {
            path: "",
            name: "map.index",
            component: () => import("pages/map/MapPage.vue"),
          },
          {
            path: "list",
            name: "map.list",
            component: () => import("pages/list/ListPage.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
