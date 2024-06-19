<template>
  <div
    class="column is-flex is-align-items-center is-justify-content-space-between"
  >
    <Stopwatch :time="time" />
    <div class="buttons">
      <button class="button" @click="start" :disabled="stopwatchActive">
        <span class="icon">
          <i class="fas fa-play"></i>
        </span>
      </button>
      <button class="button" @click="stop" :disabled="!stopwatchActive">
        <span class="icon">
          <i class="fas fa-stop"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stopwatch from "./Stopwatch.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  emits: ['stopTimer'],
  data() {
    return {
        time: 0,
        stopwatch: 0,
        stopwatchActive: false
    }
  },
  components: {
    Stopwatch
  },
  methods: {
    start() {
        this.stopwatchActive = true;
        this.stopwatch = setInterval(() => {
            this.time += 1;
        }, 1000);
    },
    stop() {
        this.stopwatchActive = false;
        clearInterval(this.stopwatch);
        this.$emit('stopTimer', this.time);
        this.time = 0;
    }
  }
});
</script>

<style scoped>
.buttons {
  display: flex;
  gap: 10px;
}

.column {
  display: flex;
  align-items: center;
}

.is-flex.is-align-items-center.is-justify-content-space-between {
  justify-content: space-between;
}
</style>