<template>
  <div
    class="column is-flex is-align-items-center is-justify-content-space-between"
  >
    <Stopwatch :time="time" />
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stopwatch from "./Stopwatch.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  data() {
    return {
        time: 0,
        stopwatch: 0,
    }
  },
  components: {
    Stopwatch
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