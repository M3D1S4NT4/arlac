import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import { VacioComponent } from './vacio/vacio.component';
import { OrigenComponent } from './origen/origen.component';
import { NaturalezaComponent } from './origen/naturaleza/naturaleza.component';
import { GuerraComponent } from './origen/guerra/guerra.component';
import { MagiaComponent } from './origen/magia/magia.component';

@NgModule({
  declarations: [
    AppComponent,
    VacioComponent,
    OrigenComponent,
    NaturalezaComponent,
    GuerraComponent,
    MagiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'vacio', component: VacioComponent},
      {path: 'origen', component: OrigenComponent},
      {path: 'sombra', component: MagiaComponent},
      {path: 'union', component: NaturalezaComponent},
      {path: 'ser', component: GuerraComponent},
      {path: '', redirectTo: '/vacio', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
