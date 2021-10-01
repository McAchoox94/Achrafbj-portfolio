import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeadComponent } from './contact-head.component';

describe('ContactHeadComponent', () => {
  let component: ContactHeadComponent;
  let fixture: ComponentFixture<ContactHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
