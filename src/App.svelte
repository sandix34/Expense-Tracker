<script>
  import ExpenseTable from "./components/ExpenseTable.svelte";
  import store from "./store/ExpenseStore.js";
  import ExpenseCreate from "./components/ExpenseCreate.svelte"; 

  export let title;
  let expenses = [];

  store.subscribe(data => {
	  expenses = data;
  })
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>{title}</h1>
<ExpenseCreate/>
<ExpenseTable expenses={expenses} />
