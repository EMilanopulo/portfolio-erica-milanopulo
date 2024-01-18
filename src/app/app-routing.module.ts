import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationPageComponent } from './components/generic/presentation-page/presentation-page.component';
import { LandingPageComponent } from './components/generic/landing-page/landing-page.component';
import { TecnologiePageComponent } from './components/generic/tecnologie-page/tecnologie-page.component';
import { EsperienzePageComponent } from './components/generic/esperienze-page/esperienze-page.component';
import { ContattiPageComponent } from './components/generic/contatti-page/contatti-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'presentazione', component: PresentationPageComponent},
  {path: 'tecnologie', component: TecnologiePageComponent},
  {path: 'esperienze', component: EsperienzePageComponent},
  {path: 'contatti', component: ContattiPageComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
