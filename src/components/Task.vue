<template>
    <div class="box">
        <div class="columns">
            <div class="column is-7">
                Descrição da tarefa
            </div>
            <div class="column">
                <Stopwatch
                    time="15"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Stopwatch from './Stopwatch.vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Task',

    components: {
        Stopwatch,
    }
});
</script>
