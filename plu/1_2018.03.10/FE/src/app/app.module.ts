import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MatComponents } from './app.imports-material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { ApiService, AuthService } from './services'
import { MessagesComponent } from './messages.component'

import { RegisterComponent } from './register.component'
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login.component'
import { UsersComponent } from './users.components'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './authInterceptor.service'

const routes = [
  { path: '', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: ProfileComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ...MatComponents,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
