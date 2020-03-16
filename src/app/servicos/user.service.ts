import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users";

  constructor(private http : HttpClient) { }

  //criar um metodo para acessar muitas paginas
  public listarUsuarios(pagina: Number){
    return this.http.get(`${this.url}?page=${pagina}}`);
    //crase criar string grandonas usando variaveis
  }

  //criar um metodo para pegar uma unica pagina de usuario
  public usuarioUnico(id : number){
    return this.http.get(`${this.url}/${id}`);
  }
}
