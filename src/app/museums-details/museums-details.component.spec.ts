import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumsDetailsComponent } from './museums-details.component';

describe('MuseumsDetailsComponent', () => {
  let component: MuseumsDetailsComponent;
  let fixture: ComponentFixture<MuseumsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
