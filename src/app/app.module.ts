import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HireComponent } from './hire/hire.component';
import { FormsComponent } from './forms/forms.component';
import { ParticipateComponent } from './participate/participate.component';
import { EndComponent } from './end/end.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhiteComponent } from './white/white.component';
import { BlackComponent } from './black/black.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HireComponent,
    FormsComponent,
    ParticipateComponent,
    EndComponent,
    WhiteComponent,
    BlackComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
