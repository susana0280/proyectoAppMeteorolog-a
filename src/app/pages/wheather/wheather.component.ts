import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWheatherData } from '../../shared/interfaces/wheather.interface';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrl: './wheather.component.css'
})
export class WheatherComponent {

  @Input() public wheatherData:IWheatherData | undefined


 

public baseUrl="https://openweathermap.org/img/wn/"
  
  constructor(){  


  }



}
