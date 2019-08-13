<script>
import { fade } from 'svelte/transition';

export let expense;

const fadeOptions = {
    duration: 700
  };

  let isInEditMode = false;

  let itemEdit = {
      date: "",
      paymentType: "",
      category: "",
      amount: 0,
      quantity: 1,
      subtotal: 0,
  };

  const toggleEdit = (exp) => {
      isInEditMode = !isInEditMode;
  }
</script>

<style>

</style>

{#if !isInEditMode}
    <tr transition:fade={fadeOptions}>
        <td>{expense.id}</td>
        <td>{expense.date}</td>
        <td>{expense.paymentType}</td>
        <td>{expense.category}</td>
        <td>{expense.amount}</td>
        <td>{expense.quantity}</td>
        <td>{expense.subtotal}</td>
        <td><span on:click={() => toggleEdit(expense)}>edit</span><span>delete</span></td>
      </tr>
{:else}
<div>in edit mode</div>
{/if}