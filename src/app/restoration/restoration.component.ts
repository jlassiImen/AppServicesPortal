import { Component, ElementRef, Input, OnInit, Output, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import * as places from 'places.js';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
  
  restaurantList : Observable<any[]>
  p: Number = 1;


  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder, public restoration: RestorationService) {}

 
  restoForm: FormGroup;
  successMessage = '';
  errorMessage = '';
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
  this.restaurantList=this.restoration.getYelpRestaurants();

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
