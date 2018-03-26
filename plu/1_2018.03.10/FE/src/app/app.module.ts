import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessagesComponent } from './messages.component';
import { MatComponents } from './app.imports-material';
import { RegisterComponent } from './register.component';


const routes = [
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ...MatComponents,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
