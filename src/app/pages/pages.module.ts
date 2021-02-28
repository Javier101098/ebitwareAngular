import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [HomeComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    CreateComponent
  ]
})
export class PagesModule { }
