import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {

    constructor(private http: HttpClient) { }

    public baseUrl: string = 'http://sandbox.trails-end.com/';


    get(endpoint: string, params?: any, reqOpts?: any) {

        let returnData = this.http.get(this.baseUrl + endpoint, reqOpts);
        return returnData;
    }

    post(endpoint: string, body: any, reqOpts?: any) {

        let returnData = this.http.post(this.baseUrl + endpoint, body, reqOpts);
        return returnData;
    }

    put(endpoint: string, body: any, reqOpts?: any) {

        let returnData = this.http.put(this.baseUrl + endpoint, body, reqOpts);
        return returnData;
    }

    delete(endpoint: string, reqOpts?: any) {
        let returnData = this.http.delete(this.baseUrl + endpoint, reqOpts);
        return returnData;
    }

    // ---------------

    getOrgList(orgType:string = "council", parentID: string = "") {

        let path = 'ajax/cdu/getOrgs/' + orgType  + '/' + parentID;
        return this.get(path);

    }

}
