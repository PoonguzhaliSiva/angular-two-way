import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string='this is my title';
  constructor(){}
  ngOnInit():void{}
  firstName="poonguzhali";
  imagepath="assets/images.jpeg";
  defaultvalue="poonguzhali";
  changeValue(e:any){
    console.log(e.target.value);
  }
  onClick(){
    console.log('welcome to angular tutorial')
  }
 
}
