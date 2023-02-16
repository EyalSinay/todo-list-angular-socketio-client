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

  constructor(private taskService: TaskService) {}

  deleteTask(taskId: string) {
    this.task.text = "Loading...";
    this.taskService.deleteTask(taskId);
  }
}
