// result.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: number = 0;  // Inicialize com um valor padrão
  patientName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtém o resultado do IMC e o nome do paciente a partir dos parâmetros da rota
    this.result = +this.route.snapshot.queryParams['result'];
    this.patientName = this.route.snapshot.queryParams['patientName'];
  }

  goBack() {
    // Navegar de volta para a página HomeComponent
    this.router.navigate(['/']);
  }
}
