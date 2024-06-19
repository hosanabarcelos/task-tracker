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
      <div class="column">
        <div
          class="is-flex is-align-items-center"
        >
          <section>
            <string>00:00:00</string>
          </section>
          <div class="buttons">
              <button class="button">
                <span class="icon">
                  <i class="fas fa-play"></i>
                </span>
              </button>
              <button class="button">
                <span class="icon">
                  <i class="fas fa-stop"></i>
                </span>
              </button>
          </div>
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
});
</script>

<style scoped>
.buttons {
    margin-left: 1rem;
}
</style>