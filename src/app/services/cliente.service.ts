import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from "./Global";
import { Cliente, Clientes } from "../interface/clientes";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url:string ;

  constructor(private http:HttpClient) { 
    this.url =  GLOBAL.url;
  }


  ServiveHttp(query:string,type:string='get',data = null){
    if (type=='post') {
      return this.http.post<Clientes>(query,data);
    }else if(type=='get'){
      return this.http.get<Clientes>(query);
    }else if (type=='put') {
      console.log(data);
      
      return this.http.put<Clientes>(query,data);
    }
  }

  getClientes() :Observable<Clientes>  {
    return this.ServiveHttp(this.url+'GET/NutriNET/Cliente');
  }

  newClientes(cliente) {
    return this.ServiveHttp(this.url+'POST/NutriNET/Cliente','post',cliente);
  }

  getCliente(id) :Observable<Clientes>  {
      return this.ServiveHttp(this.url+'GET/NutriNET/Cliente/'+id);
  }

  updateCliente(cliente:Cliente) :Observable<Clientes>  {
    return this.ServiveHttp(this.url+'PUT/NutriNET/Cliente/'+cliente.Cliente_ID,'put',cliente);
  }

}
