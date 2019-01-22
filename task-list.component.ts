import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../services/task.service'
import { Task } from 'src/app/models/task';
import { MessageService } from '../../../services/message.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

 tasks:Task[]=[];

 query:string='';
  constructor(private taskService:TaskService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getTasks();
    this.messageService.getMessage().subscribe((data)=>{
      this.getTasks();
    });
  }

  getTasks(){
    this.taskService.getTasks().subscribe((data)=>{
      this.tasks=data;
    });
  }

}
