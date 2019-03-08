import { Injectable } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import {Task} from '../models/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //tasks: Task[]=[];
  // apiUrl="https://jsonplaceholder.typicode.com/todos";

  apiUrl=" http://localhost:3000/tasks"

  /* tasks: Task[]=[
    {
      id:1,
      title: "Learn Angular",
      completed: false,
      date: new Date()
    },
    {
      id:2,
      title: "Learn MEAN stack",
      completed: false,
      date: new Date()
    },
  ]; */
  constructor(private http: HttpClient) { }
  
  
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  
  }

  getSingleTask(id: number) : Observable <Task> {
    return this. http.get <Task> (this.apiUrl + '/' + id);
  }
  addTask(title:string):Observable<Task> {
    const taskObj = {
      // id: this.tasks.length +1,
      title,
      completed: false,
      date: new Date()
    }
   // this.tasks.push(taskObj);
    return this.http.post<Task>(this.apiUrl,taskObj);
  }
  deleteTask(id:number): Observable<any>{
    /* this.tasks.forEach( (task,index) => {
      if(task.id===id){
       // this.tasks.splice(index,1);
      }
    }); */
   return this.http.delete<Task>(this.apiUrl + '/' +id);

  }
}
