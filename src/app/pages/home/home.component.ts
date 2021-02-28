import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interface/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public clientes:Cliente[]=[];

  constructor(private cs:ClienteService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getClientes();
  }


  getClientes(){
    this.cs.getClientes().subscribe(res=>{
      console.log(res);
      
      
      if (res.Cve_Error == -1) {
        
      }
      this.clientes = res.Cve_Mensaje;
      
    },err=>{

    });
  }


}
