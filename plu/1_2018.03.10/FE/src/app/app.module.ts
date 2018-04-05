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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...MatComponents,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
