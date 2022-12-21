import { Component, OnInit } from '@angular/core';
import { SsofbloginService } from './ssofblogin.service';

@Component({
  selector: 'app-ssofblogin',
  templateUrl: './ssofblogin.component.html',
  styleUrls: ['./ssofblogin.component.scss'],
})

export class SsofbloginComponent implements OnInit {
    public ssofacebook:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        username: '',
    }

    constructor (
        private ssofbloginService: SsofbloginService,
    ) { }

    ngOnInit() {
        this.ssofacebook.created_by = sessionStorage.getItem('email') || ''; 
    }
}