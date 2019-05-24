import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature: string = 'recipe';

  boldTxt = 'bold'

  message = 'this text should be ' + this.boldTxt.toUpperCase().bold();

}
