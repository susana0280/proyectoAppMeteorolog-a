import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {



  constructor() { }

public getCurrentPosition():Promise<any>{

  let options={
  enableHighAccuracy:true,
  timeout:5000,
  maximumAge:0

}
  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(resolve,reject,options)
  })

  
}


}
