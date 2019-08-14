<script>
  import ExpenseRow from './ExpenseRow.svelte';
  import store from '../store/ExpenseStore.js';
  import expenseService from '../store/ExpenseService.js';


  export let expenses;
  console.log("expenses", expenses);

  function updateExpense(event) {
    const updatedExpense = event.detail;
    expenseService.updateExpense(event.detail).then(() => {
      store.update(data => {
        const idx = data.findIndex(expense => expense.id === updatedExpense.id)
        data[idx] = updatedExpense;
        return [...data];
      });      
    });
  }

  const deleteExpense = (event) => {
    const deleteExpense = event.detail;
    expenseService
      .deleteExpense(deleteExpense)
      .then(() => {
       store.update(data => {
        data = data.filter(expense => expense.id !== deleteExpense.id);
        return [...data];
       })
      })
  }
  
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
      <ExpenseRow expense={exp} on:expense-update={updateExpense} on:expense-delete={deleteExpense}/>
    {/each}
  </tbody>
</table>
