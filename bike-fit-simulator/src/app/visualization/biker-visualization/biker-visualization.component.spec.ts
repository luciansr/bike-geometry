import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerVisualizationComponent } from './biker-visualization.component';

describe('BikerVisualizationComponent', () => {
  let component: BikerVisualizationComponent;
  let fixture: ComponentFixture<BikerVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikerVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikerVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
