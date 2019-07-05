import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './../services/auth/auth.service';
import { Router } from '@angular/router';
import {CategoriesService} from './../services/categories/categories.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  categoriesList : Observable<Array<any>>
  errorMessage;
  public searchString: string;

  constructor(public router: Router,  public categoryService: CategoriesService, public auth: AuthService) {
    
   }

  ngOnInit() {
    this.errorMessage='';
    
    this.categoriesList=this.categoryService.getAllCategories();
    
  }

  goToCategory(categoryPath){
    this.router.navigateByUrl(categoryPath);     
  }

}
