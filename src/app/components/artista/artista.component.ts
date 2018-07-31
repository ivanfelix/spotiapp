import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  loading: boolean;
  artista: any = {};
  topTracks: any[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string){
    this.spotify.getArtist(id).subscribe(artista => {
      this.artista = artista;
      console.log(this.artista);
      this.loading = false;
    })
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id).subscribe((topTracks:any) => {
      console.log(topTracks);
      this.topTracks = topTracks.tracks;
    })
  }

  ngOnInit() {
  }

}
