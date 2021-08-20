
import { Routes } from '@angular/router';
import { HelloComponent, HiComponent, TestComponent } from "./hello.component";

 export const routes: Routes = [
  {path:'hello',component: HelloComponent},
  {path:'test',component: TestComponent},
  {path:'hi',component: HiComponent}
];

