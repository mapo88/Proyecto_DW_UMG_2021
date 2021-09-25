import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private httpClient: HttpClient) { }

  // Inicio estructura del servicio
  public callNodeService(productRequest:any): Observable<any>{
    // Headers para enviar al servicio
    const headersData = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // URL
    const url= 'http://localhost:3000/products';
    // Método http (GET/POST...)
    // Cuerpo o contenido a enviar...
    return this.httpClient.post(url, JSON.stringify(productRequest),{headers: headersData});
  }
  //Fin estructura del servicio
}
