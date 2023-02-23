import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AboutComponent } from './components/about/about.component';
import { CountComponent } from './components/count/count.component';

import { ServicesComponent } from './components/services/services.component';
import { CtaComponent } from './components/cta/cta.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { PriceComponent } from './components/price/price.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ClientsComponent,
    AboutComponent,
    CountComponent,
    ServicesComponent,
    CtaComponent,
    TestimonialsComponent,
    PortfolioComponent,
    TeamComponent,
    PriceComponent,
    FAQsComponent,
    ContactComponent,
    FooterComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
