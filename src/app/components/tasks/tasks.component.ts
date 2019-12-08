import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { TaskModel } from 'src/app/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  public allTasks: TaskModel;

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.allTasks = data;
      console.log(this.allTasks);
    });
  }

}
