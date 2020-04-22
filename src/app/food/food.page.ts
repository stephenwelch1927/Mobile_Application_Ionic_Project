import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {RecipiesService} from '../Services/recipies.service';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  recipies:any=[];
  myRecipie:string;
  constructor(private recipieService:RecipiesService, private storage:Storage) { }
  

  //NgOnInit that gets data from the web
  ngOnInit() {
  
  }
  //Button On Click save to Storage
  save(){
    console.log(this.myRecipie);
    this.storage.set("recipie", this.myRecipie);
  }

}
