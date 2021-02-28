import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interface/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public cliente:Cliente;
  public status:string;
  public message:any;


  constructor(private cs: ClienteService) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  createClient(form){
    let altura = this.cliente.Estatura  * this.cliente.Estatura;
    let peso = this.cliente.Peso;
    this.cliente.IMC = peso/altura;

    this.cs.newClientes(this.cliente).subscribe( res=>{
      if (res.Cve_Error == -1) {
        this.status = 'error';
        this.message = res.Cve_Mensaje;
      }
      this.status = 'success';
      form.reset();
      
    },err=>{
      console.log(err);
      this.status = 'error';
      this.message = err.error.Cve_Mensaje;
    });

    console.log(this.cliente);
  }

}
