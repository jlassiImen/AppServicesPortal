import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import * as places from 'places.js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.component.html',
  styleUrls: ['./restauration.component.css']
})
export class RestaurationComponent implements OnInit {

  @Input() q: string;
  @ViewChild('restoAdrress') qElementRef: ElementRef;
 private RestoAddressConfig: any;

 showResto=false;

  constructor(public auth: AuthService, public router: Router, public fb: FormBuilder ) { }

restaurantList =[
{
"name": "Hippopotamus",
"address":"40, avenue Maréchal de Lattre de Tassigny 92360 Meudon France",
"Speciality":"FRANÇAIS ",
"Price":"25",
"img":"../../assets/img/restaurant/1.jpg"
},
{
"name": "Toscanini",
"address":" 32 Rue Jean Pierre Timbaud 92130 Issy-les-Moulineaux France",
"speciality":"ITALIEN",
"price":"20",
"img":"../../assets/img/restaurant/2.jpg"
},
{
"name": "Restaurant L'Ile",
"address":"170, quai de Stalingrad 92130 Issy-les-Moulineaux France ",
"Speciality":"FRANÇAIS ",
"Price":"38",
"img":"../../assets/img/restaurant/3.jpg"
}
]
   restoForm: FormGroup;
    validation_messages = { 
    
    'personne': [
      { type: 'required' }
    ],
    'date': [
      { type: 'required'}
    ],
    'heure': [
      { type: 'required'}
    ],
    'typeRestaurant': [
      { type: 'required' }
    ],
    'adresse': [
      { type: 'required' }
    ]

  }

  ngOnInit() {
  this.RestoAddressConfig = places({
      apiKey: environment.autoCompleteToken,
      appId: environment.autoCompleteAppId,
      indexName: 'instant_search',
      routing: true,
      container: this.qElementRef.nativeElement,
    });

  this.createForms();
  }

showRestaurant(){
  this.showResto = true;
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
  onSubmitResto(value){
    
  }

}
