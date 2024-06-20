<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter sidebar">
            <Sidebar />
        </div>
        <div class="column is-three-quarter">
            <Form />
            <div class="list">
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Form from './components/Form.vue';
import Task from './components/Task.vue';

export default {
    components: {
        Sidebar,
        Form,
        Task
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
    padding: 1.25rem;
}
</style>
