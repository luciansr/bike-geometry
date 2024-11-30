import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BycicleSizingComponent } from './bycicle-sizing.component';

describe('BycicleSizingComponent', () => {
  let component: BycicleSizingComponent;
  let fixture: ComponentFixture<BycicleSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BycicleSizingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BycicleSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
