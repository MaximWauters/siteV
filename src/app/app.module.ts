import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { AgendaComponent } from './agenda/agenda.component';
import { VrijhoudenComponent } from './vrijhouden/vrijhouden.component';
import { ContactLijfComponent } from './contact-lijf/contact-lijf.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    AboutComponent,
    AgendaComponent,
    VrijhoudenComponent,
    ContactLijfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'agenda', component: AgendaComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'vrijhouden', component: VrijhoudenComponent},
      { path: 'contactL', component: ContactLijfComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
      
    ], { useHash: true }),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
