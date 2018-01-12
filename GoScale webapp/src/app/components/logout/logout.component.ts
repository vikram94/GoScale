// Exact copy except import UserService from core
import { Component, OnInit } from '@angular/core';
import { RestClient } from '../../services/rest-client.service';
import { ServerConstants } from '../../constants/server.constants';


@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html'
})
export class LogoutComponent implements OnInit {
    constructor(private restClient: RestClient) {

    }
    ngOnInit() {
        this.logout();
    }
    logout() {
        // this.restClient.get(ServerConstants.LOGOUT_CUSTOMER);
        // localStorage.removeItem("Authorization");
        // this.restClient.removeHeaders("Authorization");
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
