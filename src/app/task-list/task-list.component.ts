import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/data.service";
import {Task} from "../shared/data.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList: Task[] = []
  editIsVisible: boolean = false
  textIsVisible: boolean = false
  toggle: boolean = true

  constructor(public taskService: DataService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getAllTasks()
  }

  deleteThisTask(i: number) {
    this.taskService.deleteTask(i)
  }

  showEdit() {
    this.editIsVisible = !this.editIsVisible
    this.toggle = !this.toggle
  }

  showText() {
    this.textIsVisible = !this.textIsVisible
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
