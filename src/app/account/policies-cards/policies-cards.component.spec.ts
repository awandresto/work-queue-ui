import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesCardsComponent } from './policies-cards.component';

describe('PoliciesCardsComponent', () => {
  let component: PoliciesCardsComponent;
  let fixture: ComponentFixture<PoliciesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
