import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponent/login/login.component';
import { GetDataComponent } from './MyComponent/get-data/get-data.component';
import { SetDataComponent } from './MyComponent/set-data/set-data.component';
import { UpdateFormComponent } from './MyComponent/update-form/update-form.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:GetDataComponent},
  {path:"createNew",component:SetDataComponent},
  {path:"editData/:id",component:UpdateFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
