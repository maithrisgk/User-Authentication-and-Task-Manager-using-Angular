import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

  
    return value.filter((el)=>{
      if(el.title.indexOf(args)===-1){
        return false;
      }
      else{
        return true;
      }
    });
  }

}
