import { Component, Input }  from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dynamicInput',
  templateUrl: './dynamicInputs.component.html',
  styleUrls:['./dynamicInputs.component.css']
})


export class DynamicInputs  {

  faPlus = faPlus;
  faMinus=faMinus;

  @Input() titulo:string="";
  @Input() item:string="";

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
