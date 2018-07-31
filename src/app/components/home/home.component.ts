import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

   loading:boolean;
   nuevasCanciones: any[] = [];

  constructor(
    public spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.spotifyService.getNewReleases()
    .subscribe( (data:any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }

}
