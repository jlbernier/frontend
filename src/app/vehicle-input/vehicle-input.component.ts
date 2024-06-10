import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Vehicle } from './../vehicle';

@Component({
  selector: 'app-vehicle-input',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './vehicle-input.component.html',
  styleUrl: './vehicle-input.component.css'
})
export class VehicleInputComponent {

  @ViewChild("vehicleForm") vehicleForm!: NgForm;

  @Output()  newDataEvent = new EventEmitter();

  constructor (private http: HttpClient) {}

  onSubmit(): void {
    this.http.post<Vehicle>(
      "http://localhost:8080/vehicles",
      this.vehicleForm.value
    ).subscribe(data => this.newDataEvent.emit())
  }

}
