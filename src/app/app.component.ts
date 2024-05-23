import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather,IWheatherData,Coord } from './shared/interfaces/wheather.interface';
import { WheatherServiceService } from './pages/wheather/services/wheather-service.service';
import { GeoLocationService } from './shared/services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public wheather:Observable<IWheatherData> | undefined

  wheatherData!:IWheatherData
 
   


  constructor(private wheatherServ:WheatherServiceService, private geoLocationServ:GeoLocationService){

   this.getLocation()

  }


   public onSearch(city:string):void{
   
  this.wheather=this.wheatherServ.getWheatherByName(city);
  
    this.wheather.subscribe(data=>{
      this.wheatherData=data
   
        } )
       }


       private async getLocation():Promise<void>{
        try {
          const coordenadas = await this.geoLocationServ.getCurrentPosition();
          this.wheather = this.wheatherServ.getWheatherByCoords(coordenadas.coords);
     
          this.wheather.subscribe(data => {
            this.wheatherData = data;
          });
        } catch(error) {
          console.log(error);
        }
      }
}
