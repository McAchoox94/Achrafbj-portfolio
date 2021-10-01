import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServBodyComponent } from './serv-body.component';

describe('ServBodyComponent', () => {
  let component: ServBodyComponent;
  let fixture: ComponentFixture<ServBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
