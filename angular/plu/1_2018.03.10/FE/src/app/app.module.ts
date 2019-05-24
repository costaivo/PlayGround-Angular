import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MatComponents } from './start'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './core/authInterceptor.service'


import { AppComponent, APP_ROUTES } from './start'
import { ApiService, AuthService } from './services'
import { MessagesComponent } from './messages.component'
import { PostComponent } from './post/post.component'

import { RegisterComponent, LoginComponent } from './session'
import { UsersComponent, ProfileComponent } from './user'





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
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
