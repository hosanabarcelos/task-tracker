<template>
	<header>
		<h1 class="logo">
			<img src="../assets/logo.png" alt="Logo">
			<p>Task Tracker</p>
            <h3>Feito por <a href="https://github.com/hosanabarcelos" target="_blank">@hosanabarcelos</a></h3>
		</h1>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Sidebar'
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #80afecb0;
  width: 100%;
  height: 100vh;
}
header img {
	opacity: .6;
	width: 4rem;
}
.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
}
p {
	font-size: 2rem;
	font-weight: 600;
	color: #FFFFFF;
}

h3 {
    position: absolute;
    bottom: 0;
    margin: 2rem;
    color: #FFFFFF;
}

a {
    color: #FFFFFF;
    font-weight: 600;
}

@media only screen and (max-width: 768px) {
  header {
	padding: 2.5rem;
	height: auto;
  }
  header img {
	width: 2rem;
  }
}
</style>