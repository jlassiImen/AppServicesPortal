import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {CategoriesService} from './../services/categories/categories.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  categoriesList : any;
  errorMessage;
  constructor(public router: Router,  public categoryService: CategoriesService) { }

  ngOnInit() {
    this.errorMessage='';
    
    this.loadCategories();
    
  }

loadCategories(){
//this.categoriesList=[{"_id":"5d1d1309fe81f26760f8fa30","name":"Transport","link":"transport","icon":"fa fa-taxi","categoryId":1,"__v":0,"id":"5d1d1309fe81f26760f8fa30"},{"_id":"5d1d1767607afa750c87fe70","name":"Flights","link":"filghts","icon":"fa fa-plane","categoryId":2,"__v":0,"id":"5d1d1767607afa750c87fe70"}];
        
  this.categoryService.getAllCategories().subscribe(response => {
        if(response.status == 200){
          this.errorMessage='';
           this.categoriesList=response.message;
        }
        else {
          this.errorMessage="error occured when loading categories from server"
        }
       

      });
}
  goToCategory(categoryPath){
    this.router.navigateByUrl(categoryPath);     
  }

}
