import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  allTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.allTasks.then((tasks) => (this.allTasks = tasks));

    this.taskService.newTask.subscribe((task) => this.allTasks.push(task));

    this.taskService.taskUpdated.subscribe((updatedTask) => {
      const indexTaskToUpdate = this.allTasks.findIndex(
        (task) => task._id === updatedTask._id
      );
      if (indexTaskToUpdate > -1) {
        this.allTasks.splice(indexTaskToUpdate, 1, updatedTask);
      }
    });
  }
}
