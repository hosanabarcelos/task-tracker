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
                <Box v-if="emptyList">
                    <div class="empty-state">
                        <img src="./assets/logo.png" alt="Logo Task Tracker">
                        <p>Opa!<br>
                        Parece que você ainda não começou nenhuma tarefa. Vamos começar?</p>
                    </div>
                </Box>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar.vue';
import Form from './components/Form.vue';
import Task from './components/Task.vue';
import Tasks from './interfaces/Task';
import Box from './components/Box.vue'

export default {
    data() {
        return {
            tasks: [] as Tasks[]
        }
    },
    components: {
        Sidebar,
        Form,
        Task,
        Box
    },
    computed: {
        emptyList() {
            return this.tasks.length === 0;
        }
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
.empty-state {
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 18px;
}
.empty-state img {
    width: 8rem;
}
.empty-state p {
    color: #797979;
    font-size: 1.2rem;
}
</style>
