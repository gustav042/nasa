import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FotoDiaComponent } from './components/pages/foto-dia/foto-dia.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AsteroidesComponent } from './components/pages/asteroides/asteroides.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'fotoDia', component: FotoDiaComponent},
    { path: 'asteroides', component: AsteroidesComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {} 