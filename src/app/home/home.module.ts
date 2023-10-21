import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomePageRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,    
    HomePageRoutingModule,    
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}