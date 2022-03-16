import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugstoresFormComponent } from './drugstores-form.component';

describe('DrugstoresFormComponent', () => {
  let component: DrugstoresFormComponent;
  let fixture: ComponentFixture<DrugstoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugstoresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugstoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
