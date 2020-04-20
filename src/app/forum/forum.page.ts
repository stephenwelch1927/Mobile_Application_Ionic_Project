import { Component, OnInit } from '@angular/core';
import{Storage} from '@ionic/storage';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
;@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
myRecipie:String;
cocktail:String;
  constructor(private storage: Storage, private camera:Camera) { }
  
  //Method That uses the Native PlugIn of the camera
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });

  }
  //Method that Get's and displays storage
  ngOnInit() {
    this.storage.get("recipie").then(
      (data)=>{
        this.myRecipie = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
    this.storage.get("drinks").then(
      (data)=>{
        this.cocktail = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
    
  }

}
