import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoseListComponent } from './dose-list.component';

describe('DoseListComponent', () => {
  let component: DoseListComponent;
  let fixture: ComponentFixture<DoseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
