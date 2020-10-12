<script>
	import NewTodo from './NewTodo.svelte';
	import TodoList from './TodoList.svelte';

	export let todos;

	const addNewTodo = (e) => {
		todos = [...todos,{
			id: todos.length + 1,
			text: e.detail,
			done: false
		}]
	}

</script>

<main>
	<NewTodo on:newTodo={addNewTodo} />
	<TodoList todos={todos} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>