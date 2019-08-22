import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private camera: Camera
    ) { }

  ngOnInit() { }

  async openGalery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    };
    try {
      const fileUri: string = await this.camera.getPicture(options);

      let file: string;
      if (this.plataform.is('ios')){
        file = fileUri.split('/').pop();
      }else {
        file = fileUri.substring(fileUri.lastIndexOf('/') + 1, fileUri.indexOf('?'));
      }
        const path: string = fileUri.substring(0, fileUri.lastIndexOf('/'));
      } catch(error){
        console.error(error);
    }
  }
}
