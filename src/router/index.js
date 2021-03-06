import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateTask from "../views/CreateTask.vue";
import EditTask from "../views/EditTask.vue";
import Storage from "../utils/Storage";
import { STORAGE_NAME } from "../constants";

export const PAGES = {
  HOME: "home",
  CREATE: "create",
  EDIT: "edit",
};

const routes = [
  {
    path: "/",
    name: PAGES.HOME,
    component: Home,
    meta: {
      title: "Задачи",
    },
  },
  {
    path: "/create",
    name: PAGES.CREATE,
    component: CreateTask,
    meta: {
      title: "Новая задача",
    },
  },
  {
    path: "/edit/:id",
    name: PAGES.EDIT,
    component: EditTask,
    meta: {
      title: "Редактирование задачи",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  if (to.name === PAGES.EDIT) {
    const task = Storage.getById(STORAGE_NAME, to.params.id);
    if (task) {
      to.meta.task = task;
      next();
    } else {
      location.href = "/";
    }
  } else {
    next();
  }
});

export default router;
