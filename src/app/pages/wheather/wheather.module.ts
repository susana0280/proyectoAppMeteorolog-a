import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheatherComponent } from './wheather.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    WheatherComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    WheatherComponent,
    HttpClientModule
  ]
})
export class WheatherModule { }
