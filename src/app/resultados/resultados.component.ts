import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados(){
    console.log(this.tasksService.resultados);   
    return [this.tasksService.resultados];
  }

  constructor( private tasksService: TaskService) { }

}
