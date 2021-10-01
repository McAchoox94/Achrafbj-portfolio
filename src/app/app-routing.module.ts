import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicingComponent } from './components/servicing/servicing.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'servicing', component: ServicingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  /* <!-- =======================================================
  * Author: Boujjou Achraf / Naoufal Alaoui Ismaili
  * License: https://www.linkedin.com/in/achrafboujjou // https://www.linkedin.com/in/naoufal-alaoui-ismaili-95042a165/
  ======================================================== --> */
