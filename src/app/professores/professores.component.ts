import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores'

  public professores = [
    'Dulci',
    'Marcos',
    'Carlos',
    'Douglas',
    'Rafael',
  ];

  constructor() { }

  ngOnInit() {
  }

}
