import {Directive, ElementRef, HostBinding, Renderer2} from '@angular/core';
import {DataService} from "./data.service";

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  constructor(public el: ElementRef, public r: Renderer2, public taskService: DataService) {
    this.taskService.getAllTasks().map(task => {
      if(Date.now() >= Date.parse(task.date)) {
        this.r.setStyle(el.nativeElement, 'background-color', '#cb8777')
        this.r.setStyle(el.nativeElement, 'color', 'black')
      } else if((Date.parse(task.date) - Date.now()) / 86400000 <= 3) {
        this.r.setStyle(el.nativeElement, 'background-color', '#f8d1f0')
        this.r.setStyle(el.nativeElement, 'color', 'black')
      } else {
        this.r.setStyle(el.nativeElement, 'background-color', '#e9e9e9')
        this.r.setStyle(el.nativeElement, 'color', 'black')
      }
    })
  }
}
