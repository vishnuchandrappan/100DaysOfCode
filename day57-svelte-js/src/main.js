import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		todos: ['Learn Svelte', 'This is one', 'Another one']
	}
});

export default app;