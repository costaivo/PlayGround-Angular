import { Component, Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent {

    @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}