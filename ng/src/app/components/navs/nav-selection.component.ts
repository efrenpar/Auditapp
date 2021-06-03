import { Component,Output, EventEmitter  } from '@angular/core';
 
@Component({
  selector: 'nav-selection',
  templateUrl: './nav-selection.component.html',
  styleUrls:['./nav-selection.component.css']
})
export class NavSelection {
  @Output() fase1State = new EventEmitter<boolean>();
  showMe:boolean=true;

    regresar(){
      this.showMe=false;
      this.fase1State.emit(this.showMe);
    }
}