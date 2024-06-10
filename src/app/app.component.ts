import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehicle } from './vehicle';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { VehicleInputComponent } from './vehicle-input/vehicle-input.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, VehicleInputComponent, VehicleDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  vehicles: Vehicle[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Vehicle[]>(
      "http://localhost:8080/vehicles"
    ).subscribe(data => this.vehicles = data);
  }

  appendData(newVehicle: any): void {
    this.vehicles.push(newVehicle);
  }

}
