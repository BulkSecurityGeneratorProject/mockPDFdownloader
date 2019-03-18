import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { PdfdownloadService } from '../pdfdownload.service'


import { LoginModalService, AccountService, Account } from 'app/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    error:any;
    startDate:Date;
    endDate:Date;
    errorMessage:string;
    isError:boolean = false;
    constructor(
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private PdfdownloadService: PdfdownloadService
        // private http: Http,
    ) {}

    ngOnInit() {
        this.startDate=new Date();
        this.endDate=new Date();
        this.accountService.identity().then((account: Account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.accountService.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
    compareTwoDates(){
         console.log(this.startDate);
         console.log(this.endDate);
        if(this.startDate > this.endDate){
            console.log("hi")
            this.isError = true;
            this.errorMessage = "Invalid End Date";
        //    this.error={isError:true,errorMessage:"End Date can't before start date"};
        }
        else if(this.startDate <= this.endDate){
            this.isError = false;
        }
    }
    downloadpdf(){
       this.PdfdownloadService.download().subscribe();
      }
}
