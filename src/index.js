document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  });

  const submitBtn = document.getElementById('submit-btn');
  const taskList = document.getElementById('tasks');
  submitBtn.addEventListener('click', handleSubmit);
  
  function handleSubmit() {
    const submitText = document.getElementById('new-task-description').value;
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.textContent = 'x';
    li.textContent = submitText;
    li.appendChild(btn);

    taskList.appendChild(li);

    // Add event listener directly to the 'x' button
    btn.addEventListener('click', function() {
      const parentDiv = this.parentNode;
      parentDiv.remove();
    });
  }
});
