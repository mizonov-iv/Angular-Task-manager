import { Injectable } from '@angular/core';

export interface Task{
  id: number
  title: string
  text: string
  date: any
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  taskList: Task[] = []

  constructor() { }

  getAllTasks() {
    return this.taskList
  }

  addTask(task: Task) {
    this.taskList.push(task)
  }

  deleteTask (index: number) {
    this.taskList.splice(index, 1)
  }
}
