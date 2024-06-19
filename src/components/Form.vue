<template>
    <div class="box">
      <div class="columns is-vcentered">
        <div
          class="column is-8"
          role="form"
          aria-label="Formulário para criação de nova tarefa"
        >
          <input
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
            v-model="description"
          />
        </div>
        <div class="column is-flex is-align-items-center is-justify-content-flex-end">
          <Timer @stopTimer="stop" />
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  data() {
    return {
        description: '',
    }
  },
  components: {
    Timer
  },
  methods: {
    stop(time: number) : void {
        console.log('tempo', time)
        console.log('descrição', this.description)
    }
  }
});
</script>

<style scoped>
.box {
  width: 100%;
}

.columns.is-vcentered {
  align-items: center;
}

.column.is-8 {
  display: flex;
  align-items: center;
}

.column.is-flex {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

input.input {
  width: 100%;
}
</style>
