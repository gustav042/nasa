import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  @Output() changeDate: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  dataMudada(event : any) {
    console.log(event.target.value);
    this.changeDate.emit(event.target.value);
  }
}
