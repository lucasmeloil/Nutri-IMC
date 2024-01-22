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
  errorMessage: string; // Deixe a inicialização para o construtor

  constructor(private router: Router, private toastr: ToastrService) {
    this.errorMessage = ''; // Inicialize a propriedade no construtor
  }

  calculateIMC() {
    // Validar se os campos estão preenchidos
    if (this.patientName && this.weight !== undefined && this.height !== undefined) {
      // Lógica de cálculo do IMC
      const result = this.weight / (this.height * this.height);

      // Exibir mensagem de sucesso
      this.toastr.success('Cálculo do IMC realizado com sucesso!');

      // Redireciona para a página de resultados, passando o nome do paciente
      this.router.navigate(['/result'], { queryParams: { result, patientName: this.patientName } });
    } else {
      // Utiliza ngx-toastr para exibir mensagem de erro
      this.errorMessage = 'Por favor, preencha todos os campos.';
      this.toastr.error(this.errorMessage, 'Erro');
    }
  }
}
