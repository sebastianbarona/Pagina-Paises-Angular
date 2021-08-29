import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})

export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(
    private taskService: TaskService
  ) {}


getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(tasks => {
    console.log(tasks);
  });
}

getTask() {
  this.taskService.getTask(this.txtBuscar.nativeElement.value)
  .subscribe(task => {
    this.txtBuscar.nativeElement.value = '';    
    console.log(task);
  }
  );
}


}
