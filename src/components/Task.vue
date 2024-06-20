<template>
    <div class="box">
        <div class="columns">
            <div class="column is-7">
                {{ task.description }}
            </div>
            <div class="column">
                <Stopwatch
                    :time="task.time"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Stopwatch from './Stopwatch.vue';
import Tasks from '../interfaces/Tasks';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Task',

    components: {
        Stopwatch,
    },
    props: {
        task: {
            type: Object as PropType<Tasks>,
            required: true
        }
    }
});
</script>
