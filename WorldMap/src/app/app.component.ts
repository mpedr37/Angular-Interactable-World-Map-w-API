import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapCompComponent } from './map-comp/map-comp.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { MapApiService } from './map-api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapCompComponent, MapInfoComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'World Map';
  mapData:{
    Name: string;
    Region: string; 
    CountryIncomeLevel: string; 
    CountryCapitalCity: string; 
    CountryLongitude: string; 
    CountryLatitude: string;
  }[]= []

  constructor(private mapApi: MapApiService) {}

  onCountryCode(countryCode: string) {
    this.mapApi.svgAPI(countryCode).subscribe((response: any) => {

      const countryData ={
        Name: response[1][0].name,
        Region: response[1][0].region.value,
        CountryIncomeLevel: response[1][0].incomeLevel.value,
        CountryCapitalCity: response[1][0].capitalCity,
        CountryLongitude: response[1][0].longitude,
        CountryLatitude: response[1][0].latitude
      };
      this.mapData = [countryData];
    });
  }
}
