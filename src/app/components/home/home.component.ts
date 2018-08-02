import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

   loading:boolean;
   error:boolean;
   mensajeError:string;
   nuevasCanciones: any[] = [];

  constructor(
    public spotifyService: SpotifyService
  ) {
    this.error = false;
    this.loading = true;
    this.spotifyService.getNewReleases()
    .subscribe( (data:any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, errorServicio => {
      console.log(errorServicio);
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    }
  );
  }

}
