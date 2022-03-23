import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  constructor() { }

  name: string = "Abdelrahman Ehab";

  //arary of tasks
  tasks: Task[] = [];

  ngOnInit(): void {
  }

  addTask(tittle: string) {
    let task = new Task();
    task.Title = tittle;
    if (task.Title) {
      this.tasks.push(task);
    } else {
      alert("You Can't Add Empty Task");
    }
  }


  updateTask(task: Task): void {
    if (task.IsDone == true) {
      task.IsDone = false;
    }
    else {
      task.IsDone = true;
    }
    //task.IsDone = !task.IsDone;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  getPendingTasksCount(): number {
    return this.tasks.filter(task => !task.IsDone).length;
  }
}
