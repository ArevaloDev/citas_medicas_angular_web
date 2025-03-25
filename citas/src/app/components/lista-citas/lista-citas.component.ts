import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { Citas } from '../../interfaces/citas.interface';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrl: './lista-citas.component.css'
})
export class ListaCitasComponent implements OnInit {

  public cita$!:Observable<Citas[]>;
  public mostrarCItas: boolean = false;
  constructor(
    private citasService:CitasService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.cita$ = this.citasService.cita$;
  }

  toggleCitas = () => {
    this.mostrarCItas = !this.mostrarCItas;
    this.router.navigate(['/citas']);
  }



}
