import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url= 'http://loiane.com'
  angularCourse = true;
  imageURL = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: String = '';

  isMouseOver: boolean = false;
  constructor() { }

  getValue() {
    return 1;
  }

  likeCourse() {
    return true;
  }

  clickButton() {
    alert('Botão clicado')
  }

  onKeyUp(evento:KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit(): void {
  }

}
