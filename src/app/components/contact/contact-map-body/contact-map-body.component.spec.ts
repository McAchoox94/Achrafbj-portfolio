import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMapBodyComponent } from './contact-map-body.component';

describe('ContactMapBodyComponent', () => {
  let component: ContactMapBodyComponent;
  let fixture: ComponentFixture<ContactMapBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMapBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMapBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
