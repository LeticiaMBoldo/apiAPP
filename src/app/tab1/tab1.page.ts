import { Component } from '@angular/core';
import { UserService } from '../servicos/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //variaveis para paginação 
  public page = 1;
  public totalPaginas = 0;

  //dados dos Usuários 
  public usuariosPagina = 0;
  public totalUsusarios = 0;

  //lista para os usuarios 
  public listaUsuarios = [];

  
  constructor(private userService: UserService) {
    //para conseguir mostrar na tela é preciso antes chamar o metodo criado
    //no caso o buscaUsuarios
    this.buscarUsuarios(this.page);
  }

  public buscarUsuarios(pagina: Number){
    this.userService.listarUsuarios(pagina).subscribe(dados=>{
      //dados para paginação
      this.page = dados['page'];
      this.totalPaginas = dados['total_pages'];
      this.usuariosPagina = dados['per_page'];
      this.totalUsusarios = dados['total'];

      //dados para a listagem de usuários
      this.listaUsuarios = dados['data'];
    })
  }

}
