import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  titulo = "Alunos";
  public alunos = [ 
  {id: 1, nome: 'Emily', sobrenome: 'Kadiama', telefone:34255},
  {id: 2, nome: 'Deryk', sobrenome: 'Kadiama', telefone:3322542435},
  {id: 3, nome: 'Ana Elisa', sobrenome: 'Kadiama', telefone:33424322255},
  {id: 4, nome: 'Mark', sobrenome: 'Kadiama', telefone:3322542425},
  {id: 5, nome: 'Elaine', sobrenome: 'Kadiama', telefone:33225424325},
];
   

  constructor() { }

  ngOnInit() {
  }

}
