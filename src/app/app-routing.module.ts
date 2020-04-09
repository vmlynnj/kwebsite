import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { AccoladesComponent } from './accolades/accolades.component';
import { ReadComponent } from './read/read.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent},
  { path: 'accolades', component: AccoladesComponent},
  { path: 'read', component: ReadComponent},
  { path: 'contact', component: ContactComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
