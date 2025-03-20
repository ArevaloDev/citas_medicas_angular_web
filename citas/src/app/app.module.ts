import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCitasComponent } from './components/lista-citas/lista-citas.component';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCitasComponent,
    CrearCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
