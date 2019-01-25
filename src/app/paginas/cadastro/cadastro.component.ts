import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup;
  cadastro = false;

  constructor(private fb: FormBuilder, private service: CadastroService) { }


  ngOnInit() {

    this.formCadastro = this.fb.group({

      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]

    });

  }

  // get f() { return this.formCadastro.controls; }


  cadastrarUSer() {
   
    this.cadastro = true;
    if (this.formCadastro.valid) {
      this.service.addUser(this.formCadastro.getRawValue())
    
    }
    
  }

}
