import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { RrrComponent } from './rrr/rrr.component';
import { ShehzadaComponent } from './shehzada/shehzada.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    MoviesComponent,
    HomeComponent,
    DetailsComponent,
    PaymentComponent,
    TicketComponent,
    RrrComponent,
    ShehzadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }