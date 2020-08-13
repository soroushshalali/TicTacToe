import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadeComponentrComponent } from './heade-componentr.component';

describe('HeadeComponentrComponent', () => {
  let component: HeadeComponentrComponent;
  let fixture: ComponentFixture<HeadeComponentrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadeComponentrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadeComponentrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
