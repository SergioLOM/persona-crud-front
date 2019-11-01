import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleRegistryComponent } from './components/people-registry/people-registry.component';
import { PeopleFindComponent } from './components/people-find/people-find.component'

const routes: Routes = [
  { path: 'people-find', component: PeopleFindComponent},
  { path: 'people-registry', component: PeopleRegistryComponent},
  { path: 'people-list', component: PeopleListComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
