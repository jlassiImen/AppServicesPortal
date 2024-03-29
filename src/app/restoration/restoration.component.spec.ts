import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorationComponent } from './restoration.component';

describe('ServiceRestoComponent', () => {
  let component: RestorationComponent;
  let fixture: ComponentFixture<RestorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
