import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoseComponent } from './add-dose.component';

describe('AddDoseComponent', () => {
  let component: AddDoseComponent;
  let fixture: ComponentFixture<AddDoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
