import { Component } from '@angular/core';
import { BikerSizingDataService } from '../services/sizing/biker-sizing-data.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikerSizing } from '../services/sizing/biker-sizing';

@Component({
  selector: 'app-biker-sizing',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './biker-sizing.component.html',
  styleUrl: './biker-sizing.component.css',
})
export class BikerSizingComponent {
  bikerForm: FormGroup;

  constructor(
    private bikerSizingDataService: BikerSizingDataService,
    private formBuilder: FormBuilder
  ) {
    const initialValues = {
      torso: 65,
      upperLeg: 55,
      lowerLeg: 65,
      footSize: 42,
    };
    this.bikerForm = this.formBuilder.group<BikerSizing>(initialValues);
    this.bikerSizingDataService.updateBikerSizing(initialValues);
  }

  ngOnInit(): void {
    this.bikerForm.valueChanges.subscribe((values: BikerSizing) => {
      this.bikerSizingDataService.updateBikerSizing(values);
    });
  }
}
