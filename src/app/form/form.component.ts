import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DataService, Task} from "../shared/data.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup

  constructor(public taskService: DataService) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    })
  }

  submitForm() {
    if (this.form.invalid) {
      return
    }

    const task: Task = {
      id: Date.now(),
      title: this.form.value.title,
      text: this.form.value.text,
      date: this.form.value.date
    }

    this.taskService.addTask(task)

    this.form.reset()
  }
}
