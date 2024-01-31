import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores'

  public professores = [
    {id: 1, nome: 'Laura', disciplina:'matematica'},
    {id: 2, nome: 'marta', disciplina:'portugues'},
    {id: 3, nome: 'Ana', disciplina:'Historia'},
    {id: 4, nome: 'MArcilene', disciplina:'filosofia'},
    {id: 5, nome: 'Francisca', disciplina:'geografia'},
    {id: 6, nome: 'joquebede', disciplina:'literatura'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
