import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBoddyComponent } from './portfolio-boddy.component';

describe('PortfolioBoddyComponent', () => {
  let component: PortfolioBoddyComponent;
  let fixture: ComponentFixture<PortfolioBoddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioBoddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBoddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
