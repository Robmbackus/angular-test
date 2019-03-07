import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trails-end-ng';

    public selectedUnit: any;

    setSelectedUnit($event: any) {
        this.selectedUnit = $event
    }


}
