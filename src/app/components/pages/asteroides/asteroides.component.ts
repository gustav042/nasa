import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Asteroide } from 'src/app/asteroide';
import { AsteroideService } from 'src/app/services/asteroide.service';

@Component({
  selector: 'app-asteroides',
  templateUrl: './asteroides.component.html',
  styleUrls: ['./asteroides.component.css']
})
export class AsteroidesComponent implements OnInit {

  constructor(private http: HttpClient, private asteroidsService: AsteroideService) { }

  asteroides : Asteroide[] = [];
  asteroidePerto : Asteroide = {
    nome: '',
    distancia : '',
    tamanho_minimo : '',
    tamanho_maximo : ''
  }

  ngOnInit(): void {
    
   
    
    
  }

  onChangeDate(dataEscolhida : any){
    this.asteroides = []
    this.asteroidsService.requisicao(dataEscolhida).subscribe(data => {
      console.log(".subscribe");
      console.log(data)
      data.near_earth_objects[dataEscolhida].forEach((element:any) => {
        var asteroide : Asteroide = {
          nome: '',
          distancia : '',
          tamanho_minimo : '',
          tamanho_maximo : ''
        }
      asteroide.nome = element.name;
      asteroide.tamanho_maximo = element.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);
      asteroide.tamanho_minimo = element.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2);
      var distanciaBilhoes = Number(element.close_approach_data['0'].miss_distance.kilometers)/1000000;
      asteroide.distancia = distanciaBilhoes.toFixed(2)
      this.asteroides.push(asteroide)
      });
      
      
    });
  }

}
