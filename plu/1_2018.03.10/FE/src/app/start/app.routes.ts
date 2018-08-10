
import { Routes } from '@angular/router';
import { PostComponent } from '../post/post.component'
import { RegisterComponent, LoginComponent } from '../session'
import { UsersComponent, ProfileComponent } from '../user'

export const APP_ROUTES: Routes = [
    { path: '', component: PostComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },
    { path: 'profile/:id', component: ProfileComponent }
];

