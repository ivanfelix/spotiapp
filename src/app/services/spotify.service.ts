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

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD4SkNO4hU1VsbuS1N9_RFIN-hbpfu9Z7WJ9l-zcwhP4MhkLW2EYpyQHpJP_Xdxd1p8MLdEVn4XCeVuMXM'
    });
    return this.http.get(url, {headers});
  }
  
  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items ));
  }

  buscar(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&market=US&limit=10`)
    .pipe(map( data => data['artists'].items )); // sin las llaves y en una sola línea
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=ES`);
  }

}

/* 

así estaba antes de utilizar la otra función

getNewReleases(){
  
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCJjSGyMkKjESp9IWVxg7Lqs_XHNbiK7osxx1iYlrBsnyXw9SMNA6kWSRtPFU0Qymd3_bTBn512WbefgZc'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe(map( data => { // con llaves para entenderlo mejor
      return data['albums'].items;
    }))
  }
*/