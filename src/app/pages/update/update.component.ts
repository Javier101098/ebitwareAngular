import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interface/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  public cliente:Cliente;
  public status:string = '';
  public message:any;
  public formV :boolean = false;
  

  constructor(private cs:ClienteService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params.id;
    this.getCliente(id);
  }

  getCliente(id){

    this.cs.getCliente(id).subscribe( res=>{
      console.log(res);
      
      if (res.Cve_Error == -1) {
        
      }
      this.cliente = res.Cve_Mensaje[0];

    },err=>{
      console.log(err);
      
    });

  }


  updateClient(form){
    let altura = this.cliente.Estatura  * this.cliente.Estatura;
    let peso = this.cliente.Peso;
    this.cliente.IMC = peso/altura;
    this.cs.updateCliente(this.cliente).subscribe( res=>{
      console.log(res);
      
      if (res.Cve_Error == -1) {

      this.status = 'error';
      this.message = res.Cve_Mensaje;
      }
      
      this.status = 'success';
      this.cliente =this.cliente;
      this.formV = false;
      
    },err=>{
      console.log(err);
      this.status = 'error';
      this.message = err.error.Cve_Mensaje;
      
    });

  }

}
