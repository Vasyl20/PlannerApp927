import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name:string = "Vasil";
   isCheck:boolean = true;
   age:number = 20;
   

}
