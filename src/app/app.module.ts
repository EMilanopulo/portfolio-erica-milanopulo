import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './components/common/base-layout/base-layout.component';
import { LandingPageComponent } from './components/generic/landing-page/landing-page.component';
import { ColoredRowsComponent } from './components/generic/landing-page/colored-rows/colored-rows.component';
import { PresentationPageComponent } from './components/generic/presentation-page/presentation-page.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { TecnologiePageComponent } from './components/generic/tecnologie-page/tecnologie-page.component';
import { EsperienzePageComponent } from './components/generic/esperienze-page/esperienze-page.component';
import { ContattiPageComponent } from './components/generic/contatti-page/contatti-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    LandingPageComponent,
    ColoredRowsComponent,
    PresentationPageComponent,
    MenuComponent,
    TecnologiePageComponent,
    EsperienzePageComponent,
    ContattiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
