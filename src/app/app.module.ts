import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AboutMeComponent } from './components/about/about-me/about-me.component';
import { SkillsComponent } from './components/about/skills/skills.component';
import { FactsComponent } from './components/about/facts/facts.component';
import { TesttestimonialsComponent } from './components/about/testtestimonials/testtestimonials.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ResumeComponent } from './components/resume/resume.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ServicingComponent } from './components/servicing/servicing.component';
import { ServBodyComponent } from './components/servicing/serv-body/serv-body.component';
import { ServHeaderComponent } from './components/servicing/serv-header/serv-header.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactHeadComponent } from './components/contact/contact-head/contact-head.component';
import { ContactMapBodyComponent } from './components/contact/contact-map-body/contact-map-body.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioHeadComponent } from './components/portfolio/portfolio-head/portfolio-head.component';
import { PortfolioBoddyComponent } from './components/portfolio/portfolio-boddy/portfolio-boddy.component';

import { CountUpModule } from 'ngx-countup';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Card1Component } from './components/portfolio/portfolio-boddy/card1/card1.component';
import { Card2Component } from './components/portfolio/portfolio-boddy/card2/card2.component';
import { Card3Component } from './components/portfolio/portfolio-boddy/card3/card3.component';
import { Card4Component } from './components/portfolio/portfolio-boddy/card4/card4.component';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { CertificatesComponent } from './components/certificates/certificates.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AboutMeComponent,
    SkillsComponent,
    FactsComponent,
    TesttestimonialsComponent,
    ResumeComponent,
    FourOhFourComponent,
    ServicingComponent,
    ServBodyComponent,
    ServHeaderComponent,
    ContactComponent,
    ContactFormComponent,
    ContactHeadComponent,
    ContactMapBodyComponent,
    PortfolioComponent,
    PortfolioHeadComponent,
    PortfolioBoddyComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    SwiperModule,
    FontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LightboxModule,
    MDBBootstrapModule.forRoot(),
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/* <!-- =======================================================
  * Author: Boujjou Achraf / Naoufal Alaoui Ismaili
  * License: https://www.linkedin.com/in/achrafboujjou // https://www.linkedin.com/in/naoufal-alaoui-ismaili-95042a165/
  ======================================================== --> */