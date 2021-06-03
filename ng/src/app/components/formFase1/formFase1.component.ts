import { Component,OnInit  } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-Fase1',
    templateUrl: './formFase1.component.html',
    styleUrls:['./formFase1.component.css']
  })

export class Fase1Component  {

  faPlus = faPlus;
  faMinus=faMinus;
  optionsOrigin:string []=[ "Por requerimiento directo de procedencia interna",
    "Solicitud de socios, accionistas y dueños",
    "Por disposición de dirección general",
    "Por mandato de las gerencias o departamentos de nivel alto",
    "Por ordenanza de colaboradores y de otros niveles",
      "Por requerimiento expreso de procedencia externa",
    "Por orden de autoridades judiciales",
    "Por ordenanza de las autoridades fiscales",
    "Por verificación de dirigentes de seguridad social y del trabajo",
    "Por verificación de otros dirigentes",
    "Por petición de proveedores y acreedores",
    "Por exigencia de distribuidores y desarrolladores de software y hardware",
    "Por solicitud de compañías externas",
  "Como resultado de emergencias y situaciones especiales",
    "De incidencia interna",
    "De incidencia externa",
  "Por peligros y circunstancias informáticas",
    "Riesgos y circunstancias del personal informático",
    "Riesgos y circunstancias físicas",
    "Riesgos y circunstancias operativas (lógicas)",
    "Riesgos y circunstancias de software",
    "Riesgos y circunstancias en las bases de datos",
    "Otros riesgos y circunstancias en el área de redes",
  " Como consecuencia de los planes de contingencia",
    "Por la falta de planes de contingencia",
    "Por la preparación de planes de contingencia",
    "Por la práctica de los planes de contingencia",
  "Por soluciones obtenidas de otras auditorías",
  "Como parte del programa integral de auditoría",
  ]

  objetivos:any[]=[];
  count:number=1;

  onAddObjetivo(){
    this.count++;
    this.objetivos.push({value:""});
    console.log(this.objetivos);
  }

  removeValue(i:number){
      this.objetivos.splice(i,1);
      console.log("remover",this.count);
  }



}