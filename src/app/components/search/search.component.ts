import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[] = [];

  constructor(
    private http: HttpClient,
    private spotify: SpotifyService
  ) { 

  }

  buscar(termino:string){
    this.spotify.buscar(termino)
    .subscribe((data:any) =>{
      console.log(data);
      this.artistas = data;
    });
  }

}
