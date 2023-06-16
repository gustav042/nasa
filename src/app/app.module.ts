import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FotoDiaComponent } from './components/pages/foto-dia/foto-dia.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarioComponent } from './components/pages/foto-dia/calendario/calendario.component';
import { AsteroidesComponent } from './components/pages/asteroides/asteroides.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, FotoDiaComponent, HomeComponent, CalendarioComponent, AsteroidesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
