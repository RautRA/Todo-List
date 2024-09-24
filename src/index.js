import "./styles.css";
import { 
    updateTodoProperty,
    createTodoItem,
    deleteTodoItem,
    toggleTodoCompletedStatus,
} from "./todoItem.js";

const todoItems = [];

// test cases
console.log("Create 1st todo item: ", createTodoItem("Learn Javascript", "Complete the javascript course from The Odin Project", "2024-10-31", "High"));
console.log("Create 2nd todo item: ", createTodoItem("Buy Eggs", "Buy Eggs for tommorrow's breakfast", "2024-09-24", "High"));
console.log("Toggle completed status of 2nd todo item: ", toggleTodoCompletedStatus(0));
console.log("Update priority of 1st todo item: ", updateTodoProperty(0, "priority", "Medium"));
console.log("Update title of 1st todo item: ", updateTodoProperty(0, "title", "Complete Javascript Course"));
console.log("delete 2nd todo item: ", deleteTodoItem(1));

export { todoItems };