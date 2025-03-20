import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { Citas } from '../../interfaces/citas.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrl: './lista-citas.component.css'
})
export class ListaCitasComponent implements OnInit {

  public citas!:Observable<Citas[]>
  constructor(private citasService:CitasService){}

  ngOnInit(): void {
    // console.log(this.citasService.obtenerCitas());
    this.citas = this.citasService.cita$;

  }



}
