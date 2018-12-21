import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Api} from "../../providers/api";


@Component({
    selector: 'app-cdu',
    templateUrl: './cdu.component.html',
    styleUrls: ['./cdu.component.scss']
})
export class CduComponent implements OnInit {

    constructor(public api: Api) {
    }


    ngOnInit() {


    }

}
