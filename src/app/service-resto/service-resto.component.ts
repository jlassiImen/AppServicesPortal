import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';

@Component({
  selector: 'app-service-resto',
  templateUrl: './service-resto.component.html',
  styleUrls: ['./service-resto.component.css']
})
export class ServiceRestoComponent implements OnInit {

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
"Speciality":"ITALIEN",
"Price":"20",
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
  this.createForms();
  }
//valider le formulaire
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
