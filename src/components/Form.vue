<template>
    <div class="box">
      <div class="columns">
        <div
          class="column is-8"
          role="form"
          aria-label="Formulário para criação de nova tarefa"
        >
          <input
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
          />
        </div>
        <div class="column is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ printTime }}</strong>
          </section>
          <div class="buttons">
            <button class="button" @click="start">
              <span class="icon">
                <i class="fas fa-play"></i>
              </span>
            </button>
            <button class="button" @click="stop">
              <span class="icon">
                <i class="fas fa-stop"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  data() {
    return {
        time: 0,
        stopwatch: 0,
    }
  },
  computed: {
    printTime() : string {
        return new Date(this.time * 1000).toISOString().substr(11,8);
    }
  },
  methods: {
    start() {
        this.stopwatch = setInterval(() => {
            this.time += 1;
        }, 1000);
    },
    stop() {
        clearInterval(this.stopwatch);
    }
  }
});
</script>

<style scoped>
.buttons {
  display: flex;
  gap: 10px;
}

.box {
  width: 100%;
}

.column {
  display: flex;
  align-items: center;
}

.is-flex.is-align-items-center.is-justify-content-space-between {
  justify-content: space-between;
}
</style>
