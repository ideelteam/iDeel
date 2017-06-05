import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WUserFormUpdateComponent } from './w-user-form-update.component';

describe('WUserFormUpdateComponent', () => {
  let component: WUserFormUpdateComponent;
  let fixture: ComponentFixture<WUserFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WUserFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WUserFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
