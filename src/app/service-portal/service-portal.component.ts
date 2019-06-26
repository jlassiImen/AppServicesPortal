import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-portal',
  templateUrl: './service-portal.component.html',
  styleUrls: ['./service-portal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicePortalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
