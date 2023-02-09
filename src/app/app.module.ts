import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlticeService } from './services/altice.service';
import { HttpClientModule } from '@angular/common/http';
import { AlticciComponent } from './alticci/alticci.component';



@NgModule({
  declarations: [
    AppComponent,
    AlticciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AlticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
