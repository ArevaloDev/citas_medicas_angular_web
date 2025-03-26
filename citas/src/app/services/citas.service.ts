import { Injectable } from '@angular/core';
import { Citas } from '../interfaces/citas.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  private citas = new BehaviorSubject<Citas[]>([]);
  public cita$ = this.citas.asObservable();
  private citaRepetida = new BehaviorSubject<boolean>(false);
  public citaRepetida$ = this.citaRepetida.asObservable();
  private listaCitas: Citas[] = [];

  constructor() {
    this.obtenerCitasStorage();
  }
  private obtenerCitasStorage = () => {
    const citasGuardadas = localStorage.getItem('citas');
    this.listaCitas = citasGuardadas ? JSON.parse(citasGuardadas) || [] : [];
    this.citas.next(this.listaCitas);
  };

  crearCita = (citas: Citas) => {
    const repetida = this.evitarCitaRepetida(citas);
    if (repetida) return;
    citas.id = this.crearIdUnico();
    this.listaCitas = [...this.listaCitas, citas];
    this.citas.next(this.listaCitas);
    this.guardarLocalStorage();

  };

  private crearIdUnico = ():number => {
    return this.listaCitas.length > 0 ? Math.max(...this.listaCitas.map(cita => cita.id)) + 1 : 1;
  }

  private evitarCitaRepetida = (citas: Citas) => {
    let citasActuales = [...this.listaCitas];
    const repetida = citasActuales.some(
      (cita) => cita.fecha === citas.fecha && cita.hora === citas.hora
    );
    this.citaRepetida.next(repetida);
    return repetida;
  };

  private guardarLocalStorage = ():void => {
    try {
      localStorage.setItem('citas', JSON.stringify(this.listaCitas));
    } catch (error) {
      console.log('error al guardar en localStorage');
    }
  }

  eliminarCita = (id: number) => {
    this.listaCitas = this.listaCitas.filter(cita => cita.id !== id);
    this.citas.next(this.listaCitas);
    this.guardarLocalStorage();
  };
}
