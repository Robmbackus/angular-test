import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Api} from "../../providers/api";


@Component({
    selector: 'app-cdu',
    templateUrl: './cdu.component.html',
    styleUrls: ['./cdu.component.scss']
})
export class CduComponent implements OnInit {
    private councils: any
    private districts: any
    private units: any
    @Output() selectedUnit: EventEmitter<any> = new EventEmitter<any>()
    constructor(public api: Api) {
    }


    ngOnInit() {
        this.api.getOrgList().subscribe((e) => {
            this.councils = e
        })

    }
    onCouncilChange(event){
        this.api.getOrgList('district', event).subscribe((e) => {
            this.districts = e
        })
    }
    onDistrictChange(event){
        this.api.getOrgList('unit', event).subscribe((e) => {
            this.units = e
        })
    }
    fetchUnitId(event){
        this.selectedUnit.emit(event)
    }

}
