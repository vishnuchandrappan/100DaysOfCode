<script>
  export let todos;
</script>

<style>
  h2 {
    color: #ff3e00;
    text-transform: capitalize;
    font-size: 2em;
    font-weight: 300;
  }
</style>

<div class="container">
  {#each todos as todo}
    <h2>{todo}</h2>
  {/each}
</div>
