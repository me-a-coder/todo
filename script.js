// script.js

// Selecting elements from the DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const todoText = todoInput.value.trim(); // Get input value, trim whitespace

  if (todoText === '') {
    alert('Please enter a todo.'); // Display alert if input is empty
    return;
  }

  // Create a new todo item
  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;

  // Create a delete button for the todo item
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';

  // Add event listener to delete button
  deleteButton.addEventListener('click', function() {
    todoItem.remove(); // Remove the todo item from the list
  });

  // Toggle todo completion on click
  todoItem.addEventListener('click', function() {
    todoItem.classList.toggle('completed'); // Toggle completed class
  });

  // Append delete button to todo item
  todoItem.appendChild(deleteButton);

  // Append todo item to todo list
  todoList.appendChild(todoItem);

  // Clear input field after adding todo
  todoInput.value = '';
});
