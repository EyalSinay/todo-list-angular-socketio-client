import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  newTaskText: string = '';

  constructor(private taskService: TaskService) {}

  createTask() {
    if (!this.newTaskText) {
      alert('Please insert a text before.');
      return;
    }

    this.taskService.addNewTask(this.newTaskText);
    this.newTaskText = '';
  }
}
