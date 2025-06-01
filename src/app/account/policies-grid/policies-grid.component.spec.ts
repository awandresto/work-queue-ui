import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesGridComponent } from './policies-grid.component';

describe('PoliciesGridComponent', () => {
  let component: PoliciesGridComponent;
  let fixture: ComponentFixture<PoliciesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
