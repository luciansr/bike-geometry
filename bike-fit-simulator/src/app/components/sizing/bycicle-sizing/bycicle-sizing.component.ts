import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BikeSizingDataService } from '../../../services/sizing/bike-sizing-data.service';
import { BikeSizing } from '../../../services/sizing/bike-sizing';

@Component({
  selector: 'app-bycicle-sizing',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './bycicle-sizing.component.html',
  styleUrl: './bycicle-sizing.component.css'
})
export class BycicleSizingComponent {
  bikeForm: FormGroup;

  sizingData = BikeSizing.sizingData();

  constructor(
    private bikeSizingDataService: BikeSizingDataService,
    private formBuilder: FormBuilder
  ) {
    const initialValues = bikeSizingDataService.getInitialValue();
    this.bikeForm = this.formBuilder.group<BikeSizing>(initialValues);
  }

  ngOnInit(): void {
    this.bikeForm.valueChanges.subscribe((values: BikeSizing) => {
      this.bikeSizingDataService.updateBikerSizing(values);
    });
  }
}
