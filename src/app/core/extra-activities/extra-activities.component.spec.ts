import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraActivitiesComponent } from './extra-activities.component';

describe('ExtraActivitiesComponent', () => {
  let component: ExtraActivitiesComponent;
  let fixture: ComponentFixture<ExtraActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
