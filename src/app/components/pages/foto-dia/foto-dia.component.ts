import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoDiaService } from 'src/app/services/foto-dia.service';
import { fotoDia } from 'src/app/fotoDia';
@Component({
  selector: 'app-foto-dia',
  templateUrl: './foto-dia.component.html',
  styleUrls: ['./foto-dia.component.css']
})
export class FotoDiaComponent implements OnInit {
  foto: fotoDia = {
    titlePhoto: '',
    source: '',
    descricao: ''
  };;
  
  mostraErro = false;

  constructor(private http: HttpClient, private fotoDiaService : FotoDiaService) {}

  ngOnInit() {
    this.fotoDiaService.requisicao().subscribe(
      response => {
        this.foto = {
          titlePhoto: response.title,
          source: response.url,
          descricao: response.explanation
        };
      },
      error => {
        console.log(error);
        this.mostraErro = true;
      }
    );
  }

  onChangeDate(dataEscolhida : any){
    this.fotoDiaService.requisicaoComData(dataEscolhida).subscribe(
      response => {
        this.foto = {
          titlePhoto: response.title,
          source: response.url,
          descricao: response.explanation
        };
      },
      error => {
        console.log(error);
      }
    );
  }

}
