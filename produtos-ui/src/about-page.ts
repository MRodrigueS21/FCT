import { HttpClient, IHttpClient, json } from "@aurelia/fetch-client";

export class AboutPage {
    constructor(@IHttpClient private http: HttpClient){
        
    }

    private produto = {}

    guardar(){
        this.http.post('http://localhost:8080/api/produtos', json(this.produto)).then(()=>{
            location.href = "/"
        })
 
   }

    load(params){
        if (params.id){
                     
           return this.http.get("http://localhost:8080/api/produtos/"+params.id).then(_r=>_r.json()).then(_produto=>{
                this.produto = _produto
              })
        }
    } 

}
