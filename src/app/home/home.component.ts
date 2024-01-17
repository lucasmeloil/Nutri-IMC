// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  patientName: string = '';
  weight: number | undefined;
  height: number | undefined;
  result: any;
  errorMessage: string = '';

  constructor(private router: Router, private toastr: ToastrService) {}

  calculateIMC() {
    // Validar se os campos estão preenchidos
    if (this.patientName && this.weight && this.height) {
      // Lógica de cálculo do IMC
      const result = this.weight / (this.height * this.height);

      // Exibir mensagem de sucesso
      this.toastr.success('Consulta do IMC realizada com sucesso!');

      // Redireciona para a página de resultados, passando o nome do paciente
      this.router.navigate(['/result'], { queryParams: { result, patientName: this.patientName } });
    } else {
      // Mensagem de erro customizada para exibir YUYT5na tela
      this.errorMessage = 'Por favor, preencha todos os campos.';
    }
  }
}
