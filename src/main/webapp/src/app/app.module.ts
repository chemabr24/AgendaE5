import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReunionesComponent } from './reuniones/reuniones.component';
import { ReunionesPreComponent } from './reuniones-pre/reuniones-pre.component';

@NgModule({
  declarations: [
    AppComponent,
    ReunionesComponent,
    ReunionesPreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
