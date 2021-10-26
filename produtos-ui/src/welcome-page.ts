import { json } from "@aurelia/fetch-client";

export class WelcomePage {
  public message = 'Listar Produtos';

  public produtos = []/*[
    {
      "id": 1,
      "nome": "Atum",
      "quantidade": 10.00,
      "valor": 1.20
    },
    {
      "id": 2,
      "nome": "Arroz",
      "quantidade": 5.00,
      "valor": 0.90
    },
    {
      "id": 3,
      "nome": "Massa",
      "quantidade": 10.00,
      "valor": 1.00
    }
  ]*/

  load(){
    return fetch('http://localhost:8080/api/produtos').then(_r=>_r.json()).then(_produtos=>{
      this.produtos = _produtos
    })  
  }

  remover(produto){
    return fetch('http://localhost:8080/api/produtos/'+produto.id,{method:"DELETE"}).then(()=>{
      this.load();
    })
  }
  
}
