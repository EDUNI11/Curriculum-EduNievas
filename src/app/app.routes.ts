import { Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {CurriculumComponent} from "./curriculum/curriculum.component";
import {ProyectosComponent} from "./proyectos/proyectos.component";

export const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'curriculum', component:CurriculumComponent},
  {path: 'proyectos', component:ProyectosComponent}
];

