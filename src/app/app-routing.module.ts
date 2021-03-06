import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCircuitComponent } from './component/add-circuit/add-circuit.component';
import { AddGuideComponent } from './component/add-guide/add-guide.component';
import { AddMaterielComponent } from './component/add-materiel/add-materiel.component';
import { AdminComponent } from './component/admin/admin.component';
import { CircuitComponent } from './component/circuit/circuit.component';
import { CircuitsComponent } from './component/circuits/circuits.component';
import { DisplayCircuitComponent } from './component/display-circuit/display-circuit.component';
import { DisplayGuideComponent } from './component/display-guide/display-guide.component';
import { DisplayMaterielComponent } from './component/display-materiel/display-materiel.component';
import { EditCircuitComponent } from './component/edit-circuit/edit-circuit.component';
import { EditGuideComponent } from './component/edit-guide/edit-guide.component';
import { EditMaterielComponent } from './component/edit-materiel/edit-materiel.component';
import { GuideComponent } from './component/guide/guide.component';
import { GuidesComponent } from './component/guides/guides.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MaterielComponent } from './component/materiel/materiel.component';
import { MaterielsComponent } from './component/materiels/materiels.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PannierComponent } from './component/pannier/pannier.component';
import { ReservationMaterielComponent } from './component/reservation-materiel/reservation-materiel.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'login', component: LoginComponent},
  {path:'circuit', component: CircuitComponent},
  {path:'circuits', component: CircuitsComponent},
  {path:'guide', component: GuideComponent},
  {path:'guides', component: GuidesComponent},
  {path:'materiel', component: MaterielComponent},
  {path:'materiels', component: MaterielsComponent},
  {path:'panier', component: PannierComponent},
  {path:'add-circuit', component: AddCircuitComponent},
  {path:'add-guide', component: AddGuideComponent},
  {path:'add-materiel', component: AddMaterielComponent},
  {path:'display-circuit/:id', component: DisplayCircuitComponent},
  {path:'display-guide/:id', component: DisplayGuideComponent},
  {path:'display-materiel/:id', component: DisplayMaterielComponent},
  {path:'edit-circuit/:id', component: EditCircuitComponent},
  {path:'edit-guide/:id', component: EditGuideComponent},
  {path:'edit-materiel/:id', component: EditMaterielComponent},
  {path:'reservation/:id', component: ReservationMaterielComponent},
  {path:'panier/:id', component: PannierComponent},
  {path:'admin', component: AdminComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
