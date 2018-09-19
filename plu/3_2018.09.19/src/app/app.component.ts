import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';

  languages = ['English', 'French', 'Spanish', 'Other'];

  model = new Employee('Ivo', 'costa', true, "w2", "default");

  hasPrimaryLanguageError = false;

  firstNameToUpperCase(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
    else {
      this.model.firstName = value;
    }
  }

  validatePrimaryLanguage(value) {
    if (value === 'default') {
      this.hasPrimaryLanguageError = true;
    }
    else
      this.hasPrimaryLanguageError = false;
  }
}
