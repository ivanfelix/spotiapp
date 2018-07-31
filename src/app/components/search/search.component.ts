import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  loading:boolean;
  artistas:any[] = [];

  constructor(
    private http: HttpClient,
    private spotify: SpotifyService
  ) { 

  }

  buscar(termino:string){
    this.loading = true;
    this.spotify.buscar(termino)
    .subscribe((data:any) =>{
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }

}
