import { Component, Input, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { MapCompComponent } from '../map-comp/map-comp.component';
@Component({
  selector: 'app-map-info',
  standalone: true,
  imports: [NgFor, MapCompComponent],
  templateUrl: './map-info.component.html',
  styleUrl: './map-info.component.css'
})
export class MapInfoComponent implements OnInit {
@Input() mapInputData:{
    Name: string;
    Region: string; 
    CountryIncomeLevel: string; 
    CountryCapitalCity: string; 
    CountryLongitude: string; 
    CountryLatitude: string;
  }[]= []
constructor() {}

ngOnInit() {}
}
