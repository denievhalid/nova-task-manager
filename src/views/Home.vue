<template>
  <div class="page">
    <h3>Задачи</h3>
    <Tasks :tasks="tasks" />

    <!-- Кнопка для создания задачи -->
    <div class="fixed-action-btn">
      <router-link :to="toCreateTaskPage" class="btn-floating btn-large">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { ACTIONS } from "../store";
import { PAGES } from "../router";
import Tasks from "../components/Tasks";

export default {
  components: {
    Tasks,
  },
  setup() {
    const { dispatch, state } = useStore();
    const tasks = computed(() => state.tasks);

    onMounted(() => {
      dispatch(ACTIONS.GET_TASKS);
    });

    const toCreateTaskPage = computed(() => ({
      name: PAGES.CREATE,
    }));

    return {
      tasks,
      toCreateTaskPage,
    };
  },
};
</script>
