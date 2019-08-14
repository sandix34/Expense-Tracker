import { db } from './firebase.js';

const createExpense = (expense) => {
    return db.collection("expenses").add(expense);
}

const readExpense = () => {
    return db.collection("expenses").get();
}

const updateExpense= (expense) => {
    return db.collection("expenses").doc(expense.id).update({...expense});
}

const deleteExpense = (expense) => {
    return db.collection("expenses").doc(expense.id).delete();
}

const expenseService = {
    createExpense,
    readExpense,
    updateExpense,
    deleteExpense
}

export default expenseService;