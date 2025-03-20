import { Injectable } from '@angular/core';
import { Citas } from '../interfaces/citas.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private citas = new BehaviorSubject<Citas[]>([]);
  public cita$ = this.citas.asObservable();
  constructor() { }

  // obtenerCitas = ():Citas[] => {
    // return this.citas;
  // }
  crearCita = (cita:Citas) => {
      const citasActuales = this.citas.value;
      this.citas.next([...citasActuales, cita])
      localStorage.setItem('citas', JSON.stringify(this.citas));
  }
}
