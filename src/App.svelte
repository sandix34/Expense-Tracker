<script>
  import { onMount } from "svelte";
  import ExpenseTable from "./components/ExpenseTable.svelte";
  import store from "./store/ExpenseStore.js";
  import ExpenseCreate from "./components/ExpenseCreate.svelte";
  import ExpenseTotal from "./components/ExpenseTotal.svelte";
  import { db } from "./store/firebase.js";

  export let title;
  let expenses = [];
  let expensesFirestore = [];

  onMount(() => {
    db.collection("expenses").onSnapshot(collectionSnapshot => {
      expensesFirestore = [];
      collectionSnapshot.forEach(doc => {
        expensesFirestore = [
          ...expensesFirestore,
          {
            id: doc.id,
            date: doc.data().date,
            paymentType: doc.data().paymentType,
            category: doc.data().category,
            amount: doc.data().amount,
            quantity: doc.data().quantity,
            subtotal: doc.data().subtotal,
          }
        ];
      });
      console.log("expensesFirestore", expensesFirestore);
    });
  });

  store.subscribe(data => {
    expenses = data;
  });
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>{title}</h1>
<ExpenseTotal />
<ExpenseCreate />
<ExpenseTable {expenses} />
