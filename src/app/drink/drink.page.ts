import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {
  cocktail:string;
  constructor(private storage:Storage) { }

  ngOnInit() {
  }
  save1(){
    console.log(this.cocktail);
    this.storage.set("drinks", this.cocktail);
  }

}
