import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  // id:number=null;
  task:Task=null;

  constructor(private route: ActivatedRoute,
    private taskService: TaskService) { }

  ngOnInit() {

    this.getSingleTask();
  }

  getSingleTask(){
    this.route.params.subscribe((data) => {
      
    
    this.taskService.getSingleTask(data.id).subscribe((task) => {
      this.task=task;
  })
})
  }

}
