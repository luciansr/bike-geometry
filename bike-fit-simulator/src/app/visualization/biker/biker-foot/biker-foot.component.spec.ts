import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerFootComponent } from './biker-foot.component';

describe('BikerFootComponent', () => {
  let component: BikerFootComponent;
  let fixture: ComponentFixture<BikerFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikerFootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikerFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
