import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoseComponent } from './new-dose.component';

describe('NewDoseComponent', () => {
  let component: NewDoseComponent;
  let fixture: ComponentFixture<NewDoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
