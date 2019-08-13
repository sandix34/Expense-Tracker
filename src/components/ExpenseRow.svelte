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
  };

  const handleInput = (event, fieldName) => {
      itemEdit[fieldName] = event.target.value;
  };

  const save = () => {

  }



</script>

<style>
    .action {
        font-size: 14px;
        margin-right: 6px;
        cursor: pointer;
    }

    .id {
       font-size: 12px; 
    }

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
        <td><span class="action" on:click={() => toggleEdit(expense)}>edit</span><span class="action">delete</span></td>
      </tr>
{:else}
    <tr>
        <th scope="row">
            <span class="id">{expense.id}</span>
        </th>
        <td>
            <input type="date" value={expense.date} on:change={evt => handleInput(evt, 'date')}>
        </td>
        <td>
            <input type="texte" value={expense.paymentType} on:input={evt => handleInput(evt, 'paymentType')}>
        </td>
        <td>
            <input type="texte" value={expense.category} on:input={evt => handleInput(evt, 'category')}>
        </td>
        <td>
            <input type="number" value={expense.amount} on:change={evt => handleInput(evt, 'amount')}>
        </td>
        <td>
            <input type="number" value={expense.quantity} on:input={evt => handleInput(evt, 'quantity')}>
        </td>
        <td>
            {expense.subtotal}
        </td>
        <td><span class="action" on:click={save}>edit</span><span class="action" on:click={toggleEdit.bind(this)}>save</span></td>
    </tr>
{/if}