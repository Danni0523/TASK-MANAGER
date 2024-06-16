class TaskView {
    constructor() {
      this.app = document.getElementById('app');
      this.taskList = document.createElement('ul');
      this.taskList.className = 'list-group';
      this.app.appendChild(this.taskList);
    }
  
    render(tasks) {
      this.taskList.innerHTML = '';
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `list-group-item ${task.completed ? 'list-group-item-success' : ''}`;
        li.innerHTML = `${task.title} <button class="btn btn-danger btn-sm float-right">Delete</button>`;
        li.querySelector('button').addEventListener('click', () => {
          const event = new CustomEvent('deleteTask', { detail: task.id });
          document.dispatchEvent(event);
        });
        this.taskList.appendChild(li);
      });
    }
  }
  