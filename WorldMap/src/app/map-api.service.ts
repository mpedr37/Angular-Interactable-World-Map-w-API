import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {

  constructor(private http: HttpClient) {}

  public svgAPI(countryCode: string) {
    return this.http.get(`https://api.worldbank.org/v2/country/${countryCode}?format=json`)
    }
}

