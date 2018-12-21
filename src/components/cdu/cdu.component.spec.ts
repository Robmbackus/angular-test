import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CduComponent } from './cdu.component';

describe('CduComponent', () => {
  let component: CduComponent;
  let fixture: ComponentFixture<CduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
