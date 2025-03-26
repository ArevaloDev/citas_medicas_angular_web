import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CitasService } from '../../services/citas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrl: './crear-citas.component.css',
})
export class CrearCitasComponent implements OnInit {
  public form!: FormGroup;
  public repetido$!: Observable<boolean>;

  constructor(
    private fb: NonNullableFormBuilder,
    private citasService: CitasService
  ) {}

  ngOnInit(): void {
    this.crearForm();
  }

  private crearForm = () => {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      sintomas: [''],
    });
  };

  crearCita = () => {
    this.citasService.crearCita(this.form.value);
    this.repetido$ = this.citasService.citaRepetida$;
  };
}
