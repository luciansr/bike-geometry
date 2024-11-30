import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerLegComponent } from './biker-leg.component';

describe('BikerLegComponent', () => {
  let component: BikerLegComponent;
  let fixture: ComponentFixture<BikerLegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikerLegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikerLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
