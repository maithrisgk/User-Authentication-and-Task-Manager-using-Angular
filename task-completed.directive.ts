import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTaskCompleted]'
})
export class TaskCompletedDirective implements OnInit {

  @Input('appTaskCompleted') completed:boolean;
  constructor(private el:ElementRef) { 
   
    
  }

  ngOnInit(){
    // console.log(this.completed);
    if(this.completed){
      this.el.nativeElement.style.textDecoration='line-through';
    }else{
      this.el.nativeElement.style.textDecoration='none';
    }
  }
    
}
