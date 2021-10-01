import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServHeaderComponent } from './serv-header.component';

describe('ServHeaderComponent', () => {
  let component: ServHeaderComponent;
  let fixture: ComponentFixture<ServHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
