<template>
  <div class="page">
    <h3>Редактирование задачи</h3>
    <TaskForm :task="task" @onSuccess="onSuccess" />

    <!-- Кнопка для возврата на главную страницу -->
    <div class="fixed-action-btn">
      <router-link :to="toHomePage" class="btn-floating btn-large">
        <i class="large material-icons">format_list_bulleted</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { PAGES } from "../router";
import TaskForm from "../components/TaskForm";

export default {
  components: { TaskForm },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const task = computed(() => route.meta.task);
    const toHomePage = computed(() => ({ name: PAGES.HOME }));

    // Функция выполняется при успешном добавлении задачи
    const onSuccess = () => {
      router.push(toHomePage.value);
    };

    return {
      task,
      toHomePage,
      onSuccess,
    };
  },
};
</script>
