import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { SimpleLoginService } from './../services/auth/simple-login.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService, public simpleLogin: SimpleLoginService) { }

  ngOnInit() {
  }

}
