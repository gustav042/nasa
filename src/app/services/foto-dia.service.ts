import { Injectable } from '@angular/core';
import { fotoDia } from '../fotoDia';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotoDiaService {
  constructor(private http : HttpClient) {}
  
  requisicao() : Observable<any>{
    console.log("oi");

    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=rGrFk6OSeaGynQD4SBskTcCKvjDJD7q0dpUXcHWK');
  }

  requisicaoComData(dataEscolhida : any) : Observable<any>{
    console.log("dataEscolhida: " + dataEscolhida);

    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=rGrFk6OSeaGynQD4SBskTcCKvjDJD7q0dpUXcHWK&date='+dataEscolhida);
  }
}
