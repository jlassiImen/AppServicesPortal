import { Component, ElementRef, Input, OnInit, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import * as places from 'places.js';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

import { RestorationService } from './../services/restoration/restoration.service';

@Component({
  selector: 'app-restoration',
  templateUrl: './restoration.component.html',
  styleUrls: ['./restoration.component.css']
})
export class RestorationComponent implements OnInit {

  @Input() q: string;
  @ViewChild('restoAdrress') qElementRef: ElementRef;
  private RestoAddressConfig: any;
  

  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 60
  };

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

   onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }


  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public restoration: RestorationService) {}

 
  restoForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  restaurantList : Observable<any[]>
  validation_messages = {
    'personne': [
      { type: 'required' }
    ],
    'date': [
      { type: 'required' }
    ],
    'heure': [
      { type: 'required' }
    ],
    'typeRestaurant': [
      { type: 'required' }
    ],
    'adresse': [
      { type: 'required' }
    ]
  }

  ngOnInit() {
  this.restaurantList=this.restoration.getAllRestaurant();

  // address autocomplete
  this.RestoAddressConfig = places({
      apiKey: environment.autoCompleteToken,
      appId: environment.autoCompleteAppId,
      indexName: 'instant_search',
      routing: true,
      container: this.qElementRef.nativeElement,
    });

    this.createForms();
  }

 
  createForms() {
    this.restoForm = this.fb.group({
      personne: new FormControl('', Validators.compose([
        Validators.required
      ])),
      date: new FormControl('', Validators.compose([
        Validators.required
      ])),
      heure: new FormControl('', Validators.compose([
        Validators.required
      ])),
      typeRestaurant: new FormControl('', Validators.compose([
        Validators.required
      ])),
      adresse: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }
  //valider la recherche du resto

  onSubmitResto(value) {
     this.restoration.getRestaurant(value).subscribe((response) => {
      if (response.message == "success") {
      }
      else {
        this.successMessage = "";
        this.errorMessage = "Invalid credentials";
      }
    }, (err) => {
      console.error(err);
      this.successMessage = "";
      this.errorMessage = "An error has occured,please retry later";
    });
  }

}
