import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleRegistryComponent } from './components/people-registry/people-registry.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PeopleFindComponent } from './components/people-find/people-find.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeopleListComponent,
    PeopleRegistryComponent,
    PeopleFindComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
