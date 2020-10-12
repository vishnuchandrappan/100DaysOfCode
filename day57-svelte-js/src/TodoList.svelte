<script>
  export let todos;
</script>

<style>
  .selected{
    color: purple;
  }
  h2 {
    color: #ff3e00;
    text-transform: capitalize;
    font-size: 2em;
    font-weight: 300;
  }
</style>

<div class="container">
  {#each todos as todo}
    <div class="todo">
      <input type="checkbox" bind:checked="{todo.done}">
      <h2 class:selected="{todo.done}">{todo.text}</h2>
    </div>
  {/each}
  <span class="selected"></span>
</div>
