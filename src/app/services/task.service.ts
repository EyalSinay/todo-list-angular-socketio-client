import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  allExistingTasks = this.socket.fromEvent<Task[]>('new-connection');
  newTask = this.socket.fromEvent<Task>('create-task');
  taskUpdated = this.socket.fromEvent<{ taskId: string; task: Task }>(
    'update-task'
  );
  taskDeleted = this.socket.fromEvent<string>('delete-task');

  constructor(private socket: Socket) {}

  addNewTask(task: Task) {
    this.socket.emit('create-task', task);
  }

  updateTask(taskId: string, newTask: Task) {
    this.socket.emit('update-task', { taskId, newTask });
  }

  deleteTask(taskId: string) {
    this.socket.emit('delete-task', taskId);
  }
}
