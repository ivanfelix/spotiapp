import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
      'Authorization': 'Bearer BQCJjSGyMkKjESp9IWVxg7Lqs_XHNbiK7osxx1iYlrBsnyXw9SMNA6kWSRtPFU0Qymd3_bTBn512WbefgZc'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe(map( data => { // con llaves para entenderlo mejor
      return data['albums'].items;
    }))
  }

  buscar(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJjSGyMkKjESp9IWVxg7Lqs_XHNbiK7osxx1iYlrBsnyXw9SMNA6kWSRtPFU0Qymd3_bTBn512WbefgZc'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=US&limit=10`, {headers})
    .pipe(map( data => data['artists'].items )); // sin las llaves y en una sola línea
  }

}
