import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  allTasks = this.socket.fromOneTimeEvent<Task[]>('new-connection');
  newTask = this.socket.fromEvent<Task>('create-task');
  taskUpdated = this.socket.fromEvent<Task>('update-task');
  taskDeleted = this.socket.fromEvent<string>('delete-task');

  constructor(private socket: Socket) {}

  addNewTask(text: String) {
    this.socket.emit('create-task', text);
  }

  updateTask(newTask: Task) {
    this.socket.emit('update-task', newTask);
  }

  deleteTask(taskId: string) {
    this.socket.emit('delete-task', taskId);
  }
}
