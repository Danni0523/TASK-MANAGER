class TaskController {
  constructor(taskModel, taskView) {
    this.taskModel = taskModel;
    this.taskView = taskView;
    this.taskView.render(this.taskModel.getTasks());

    document.addEventListener('deleteTask', (e) => {
      this.removeTask(e.detail);
    });
  }

  addTask(title) {
    const task = new Task(Date.now(), title);
    this.taskModel.addTask(task);
    this.taskView.render(this.taskModel.getTasks());
  }

  removeTask(taskId) {
    this.taskModel.removeTask(taskId);
    this.taskView.render(this.taskModel.getTasks());
  }
}
