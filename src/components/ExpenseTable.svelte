<script>
  import ExpenseRow from './ExpenseRow.svelte'

  export let expenses;
  console.log("expenses", expenses);

  
</script>

<style>

</style>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Payment type</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {#each expenses as exp}
      <ExpenseRow expense={exp}/>
    {/each}
  </tbody>
</table>
