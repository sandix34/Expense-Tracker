import { db } from './firebase.js';

const createExpense = (expense) => {
    return db.collection("expenses").add(expense);
}

const readExpense = () => {
    return db.collection("expenses").get();
}

const updateExpense= (expense) => {

}

const deleteExpense = (expense) => {

}

const expenseService = {
    createExpense,
    readExpense,
    updateExpense,
    deleteExpense
}

export default expenseService;