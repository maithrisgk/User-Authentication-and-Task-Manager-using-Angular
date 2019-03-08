import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { MessageService } from '../../../services/message.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  taskTitle:string='';
  constructor(private taskService: TaskService,
    private messageService: MessageService) { }

  
  ngOnInit() {
  }

  addTask(){
    //  console.log(this.taskTitle);
    this.taskService.addTask(this.taskTitle).subscribe((data)=>{
      this.taskTitle='';
      this.messageService.setMessage('TASK-ADDED');
    });
    return false;
  }

}
