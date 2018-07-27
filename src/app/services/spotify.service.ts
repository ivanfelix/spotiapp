import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { 
    console.log("Servicio iniciado");
  }
  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDgp-nwrCD4fy9MnUHolAKsMabQeDBh-yYkje9UqVYTMTMV3wdIWF0ck5kj3omzX8mb7Nazu78c6mNoVQM'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  buscar(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDFdeXow-BUacvF7R8CB9c3RUgtcbV145x6iLU8H9Q7cFlDa3UhnL4R4wh3sTy7QQazOewaVo3eo1o055c'
    });
    console.log(termino)
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=US&limit=10`, {headers});
  }

}
