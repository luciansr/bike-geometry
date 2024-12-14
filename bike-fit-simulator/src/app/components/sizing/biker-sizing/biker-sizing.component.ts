import { Component, OnInit } from '@angular/core';
import { CyclistSizingDataService } from '../../../services/sizing/cyclist-sizing-data.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CyclistSizing} from '../../../services/sizing/cyclist-sizing';

@Component({
  selector: 'app-biker-sizing',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './biker-sizing.component.html',
  styleUrl: './biker-sizing.component.css',
})
export class BikerSizingComponent implements OnInit {
  bikerForm: FormGroup;

  sizingData = CyclistSizing.sizingData();

  constructor(
    private cyclistSizingDataService: CyclistSizingDataService,
    private formBuilder: FormBuilder
  ) {
    const initialValues = cyclistSizingDataService.getInitialValue();
    this.bikerForm = this.formBuilder.group<CyclistSizing>(initialValues);
  }

  ngOnInit(): void {
    this.bikerForm.valueChanges.subscribe((values: CyclistSizing) => {
      this.cyclistSizingDataService.updateBikerSizing(values);
    });
  }
}
