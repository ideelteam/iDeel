import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUsersInfoComponent } from './update-users-info.component';

describe('UpdateUsersInfoComponent', () => {
  let component: UpdateUsersInfoComponent;
  let fixture: ComponentFixture<UpdateUsersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUsersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUsersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
