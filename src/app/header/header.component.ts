import { Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() buttonSelected = new EventEmitter<string>();

    onSelect(button: string) {
        this.buttonSelected.emit(button);
    }
}
