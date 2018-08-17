import { Component, Output } from '@angular/core'
import { EventEmitter } from '../../../node_modules/protractor';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent {

    @Output() featureSelected: EventEmitter = new EventEmitter();
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}