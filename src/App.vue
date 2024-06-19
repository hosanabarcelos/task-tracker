<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter sidebar">
            <Sidebar />
        </div>
        <div class="column is-three-quarter">
            <Form />
        </div>
    </main>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Form from './components/Form.vue';

export default {
    components: {
        Sidebar,
        Form
    }
}
</script>

<style>
.sidebar {
    width: 20% !important;
}
</style>
