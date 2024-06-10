import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { VehicleDisplayComponent } from "./vehicle-display/vehicle-display.component";
import { VehicleInputComponent } from "./vehicle-input/vehicle-input.component";

@NgModule({
    declarations: [
        AppComponent,
        VehicleDisplayComponent,
        VehicleInputComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        
    ],
    providers: [
        provideHttpClient(
            withInterceptorsFromDi()
        )
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}