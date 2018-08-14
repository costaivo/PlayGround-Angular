import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDetails: boolean = false;
  counter = 0;
  logs = []
  onClick() {
    console.log('i m clicked')
    this.showDetails = !this.showDetails;
    this.counter++;
    this.logs.push('log counter ' + this.counter);
  }
}
