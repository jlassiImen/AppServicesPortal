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
  this.categoryService.getAllCategories().map(response => {
        
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
