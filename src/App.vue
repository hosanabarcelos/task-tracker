<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter sidebar">
            <Sidebar />
        </div>
        <div class="column is-three-quarter">
            <Form @submitTask="saveTask"/>
            <div class="list">
                <Task
                    :key="index"
                    v-for="(task, index) in tasks"
                    :task="task"
                />
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar.vue';
import Form from './components/Form.vue';
import Task from './components/Task.vue';
import Tasks from './interfaces/Task';

export default {
    data() {
        return {
            tasks: [] as Tasks[]
        }
    },
    components: {
        Sidebar,
        Form,
        Task
    },
    methods: {
        saveTask( task: Tasks) {
            this.tasks.push(task)
        }
    }
}
</script>

<style>
body {
    background: #f6f6f6;
}
.sidebar {
    width: 20% !important;
}
.list {
    padding: 1rem;
}
</style>
