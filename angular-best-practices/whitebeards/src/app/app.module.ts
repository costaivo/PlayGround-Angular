import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountMenuComponent } from './components/account-menu';
import { CoursesComponent } from './components/courses';
import { LoadingComponent } from './components/loading-spinner';
import { NavBarComponent } from './components/nav-bar';
import { RegisterComponent, SignInComponent } from './components/sign-in';
import { DataRepositoryService } from './services/data-repository';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    LoadingComponent,
    CoursesComponent,
    AccountMenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
