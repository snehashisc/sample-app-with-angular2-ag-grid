import { Component,ViewChild } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserComponent} from './user.component';


@Component({
    moduleId: module.id,
    selector: 'userMain',
    templateUrl: `userMain.component.html`,
    directives: [UserComponent]
               
    
   
})
export class UserMainComponent {
  
  }