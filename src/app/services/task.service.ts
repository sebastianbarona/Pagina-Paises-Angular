import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { Welcome } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private api = 'https://restcountries.eu/rest/v2/all';
  private api2 = 'https://restcountries.eu/rest/v2/name/';
  public resultados : Welcome [] = [];
  private _historial: string[] = [];
  // guardar la data todo: cambiar any por su tipo correspondiente

  constructor(private http: HttpClient ) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []
  }

  getAllTasks(){
    const path = `${this.api}`;
    return this.http.get<Welcome>(path);
  }

  getTask(name: string) {
    const path = `${this.api2}${name}`;
    if(!this._historial.includes(name)){
      this._historial.unshift(name);
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }
    this.http.get<Welcome>(path)
      .subscribe( resp =>{
        this.resultados = resp[0];        
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      } )
      return this.http.get<Welcome>(path);
    }     
  
}
