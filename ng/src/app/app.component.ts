import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
  })

  export class AppComponent {

    nuevaAditoriaShow:boolean=false;
    misAuditoriasShow:boolean=false;


    regresarNuevaAuditoria(value:boolean){
      this.nuevaAditoriaShow=value;
    }
    nuevaAuditoria(){
        this.nuevaAditoriaShow=true;
        console.log(this.nuevaAditoriaShow);
    }

    misAuditorias(){
      this.misAuditoriasShow=true;
      console.log(this.misAuditoriasShow);
    }
}