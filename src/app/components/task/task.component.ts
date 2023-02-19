import { Task } from 'src/app/models/task.model';
import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = { _id: '', text: '', done: false, isOnEdit: false };
  statusTaskValue: boolean = false;
  newTaskText: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.statusTaskValue = this.task.done;
    this.newTaskText = this.task.text;
  }

  onEditClick() {
    this.task.isOnEdit = true;
    this.taskService.updateTask(this.task);
  }

  saveNewTaskText() {
    if (this.newTaskText.length > 0) {
      this.task.text = this.newTaskText;
      this.task.isOnEdit = false;
      this.taskService.updateTask(this.task);
    } else {
      alert('Please insert text first');
    }
  }

  cancelEdit() {
    this.task.isOnEdit = false;
    this.taskService.updateTask(this.task);
  }

  taskStatusChange() {
    this.task.done = this.statusTaskValue;
    this.taskService.updateTask(this.task);
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId);
  }
}
