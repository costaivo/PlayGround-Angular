import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: '**', component: WelcomeComponent, pathMatch: 'full' },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
