import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = "https"
  protected housingLocationList: HousingLocation[] = [
  ];
  constructor() { }

  getAllHousingLocations() : HousingLocation[]{
    return this.housingLocationList;
  }
  getHousingLocationsById(id:Number) : HousingLocation| undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
      
  }
  }
  

