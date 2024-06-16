class Task {
  constructor(id, title, completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

class TaskModel {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  getTasks() {
    return this.tasks;
  }
}
