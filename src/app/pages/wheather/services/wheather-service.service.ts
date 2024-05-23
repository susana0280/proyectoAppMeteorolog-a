import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coord, IWheatherData,Weather } from '../../../shared/interfaces/wheather.interface';
import { HttpClientModule,HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WheatherServiceService {

  private api_Url=environment.openWheather.url


  constructor(private http:HttpClient) { }


  public getWheatherByName(city:string):Observable<IWheatherData>{

    const params=new HttpParams()
    .set('q',city)
    .set('units','metric')
    .set('appid',environment.openWheather.key)


   return this.http.get<IWheatherData>(`${this.api_Url}/weather`,{params});

  }



  public getWheatherByCoords(coordenada:Coord):Observable<IWheatherData>{
    

    const params=new HttpParams()
    .set('lat',coordenada.latitude)
    .set('lon',coordenada.longitude)
    .set('units','metric')
    .set('appid',environment.openWheather.key)

    return this.http.get<IWheatherData>(`${this.api_Url}/weather`,{params});
   

  }

}
