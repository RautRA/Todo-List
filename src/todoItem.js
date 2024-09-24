import { todoItems } from "./index.js";

class TodoItem {
    constructor (title, description, dueDate, priority) {
        const dateArray = dueDate.split("-");
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
        this.priority = priority;
        this.completed = false;
    }
}

const createTodoItem = function (title, description, dueDate, priority) {
    const newTodoItem = new TodoItem(title, description, dueDate, priority);
    todoItems.push(newTodoItem);
    return todoItems;
};

const deleteTodoItem = function (todoIndex) {
    todoItems.splice(todoIndex, 1);
    return todoItems;
};

const toggleTodoCompletedStatus = function (todoIndex) {
    todoItems[todoIndex].completed = !todoItems[todoIndex].completed;
    return todoItems;
}

const updateTodoProperty = function (todoIndex, propertyToUpdate, newPropertyValue) {
    todoItems[todoIndex][propertyToUpdate] = newPropertyValue;
    return todoItems;
}

export { createTodoItem, deleteTodoItem, toggleTodoCompletedStatus, updateTodoProperty};