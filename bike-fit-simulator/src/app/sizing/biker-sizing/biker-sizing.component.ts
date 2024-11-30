import { Component } from '@angular/core';
import { BikerSizingDataService } from '../../services/sizing/biker-sizing-data.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BikerSizing } from '../../services/sizing/biker-sizing';

@Component({
  selector: 'app-biker-sizing',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './biker-sizing.component.html',
  styleUrl: './biker-sizing.component.css',
})
export class BikerSizingComponent {
  bikerForm: FormGroup;

  sizingData = BikerSizing.sizingData();

  constructor(
    private bikerSizingDataService: BikerSizingDataService,
    private formBuilder: FormBuilder
  ) {
    const initialValues = bikerSizingDataService.getInitialValue();
    this.bikerForm = this.formBuilder.group<BikerSizing>(initialValues);
  }

  ngOnInit(): void {
    this.bikerForm.valueChanges.subscribe((values: BikerSizing) => {
      this.bikerSizingDataService.updateBikerSizing(values);
    });
  }
}
