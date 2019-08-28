import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderService } from '../services/loader/loader-service.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent  {
  
  constructor(private spinner:NgxSpinnerModule,private loaderService: LoaderService) { }
  isLoading: Subject<boolean> = this.loaderService.isLoading;

}
