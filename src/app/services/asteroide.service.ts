import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsteroideService {
  constructor(private http : HttpClient) {}
  
  requisicao(dataEscolhida : any) : Observable<any>{
    console.log(dataEscolhida);
    return this.http.get<any>('https://api.nasa.gov/neo/rest/v1/feed?start_date='+ dataEscolhida + '&end_date=' + dataEscolhida + '&api_key=rGrFk6OSeaGynQD4SBskTcCKvjDJD7q0dpUXcHWK');
  }

}
