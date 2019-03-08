import { Directive , ElementRef, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private el:ElementRef) { }

  ngOnInit(){
   
  }

  @HostListener('mouseenter') onmouseenter(){
    this.el.nativeElement.style.backgroundColor='yellow';
  }

  @HostListener('mouseout') onmouseout(){
    this.el.nativeElement.style.backgroundColor='white';
  }
}
