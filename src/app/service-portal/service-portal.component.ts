import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-portal',
  templateUrl: './service-portal.component.html',
  styleUrls: ['./service-portal.component.css']
})
export class ServicePortalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
