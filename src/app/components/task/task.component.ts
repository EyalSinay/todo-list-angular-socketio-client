import { Task } from 'src/app/models/task.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = { _id: '', task: '', done: false, isOnEdit: false };

  constructor() {}
}
