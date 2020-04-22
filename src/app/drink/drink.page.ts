import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {
  drinks:string;
  constructor(private storage:Storage) { }
  
  //Save button that saves a string to local storage
  ngOnInit() {
  }
  save1(){
    console.log(this.drinks);
    this.storage.set("drinks", this.drinks);
  }

}
