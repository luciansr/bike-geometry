import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerSizingComponent } from './biker-sizing.component';

describe('BikerSizingComponent', () => {
  let component: BikerSizingComponent;
  let fixture: ComponentFixture<BikerSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikerSizingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikerSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
