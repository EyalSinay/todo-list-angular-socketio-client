import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import {} from './services/task.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.serverHost, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    CreateTaskComponent,
  ],
  imports: [BrowserModule, FormsModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
