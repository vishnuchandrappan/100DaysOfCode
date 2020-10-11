<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let todo = "";

  function handleSubmit() {
    dispatch("newTodo", todo);
    todo = "";
  }

  const onSumbit = (e) => {
    e.preventDefault();
  }
</script>

<style>
  .container {
    background: rgba(43, 42, 42, 0.3);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
  }
  form {
    display: flex;
    border-radius: 5px;
  }
  input {
    border: 0;
    border-radius: 5px 0px 0px 5px;
  }
  button {
    border-radius: 0px 5px 5px 0px;
    background: #ff3e00;
    color: white;
    border: none;
  }
</style>

<div class="container">
  <form on:submit={onSumbit}>
    <input type="text" bind:value={todo} />
    <button on:click={handleSubmit}>Add</button>
  </form>
</div>
