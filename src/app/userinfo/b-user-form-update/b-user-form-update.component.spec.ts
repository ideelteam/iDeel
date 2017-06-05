import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BUserFormUpdateComponent } from './b-user-form-update.component';

describe('BUserFormUpdateComponent', () => {
  let component: BUserFormUpdateComponent;
  let fixture: ComponentFixture<BUserFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BUserFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BUserFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
