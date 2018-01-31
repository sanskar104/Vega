import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssignmentComponent } from "./assignment/assignment.component";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
export const router: Routes= [
  { path:'', redirectTo:'search', pathMatch:'full' },
    { path:'login', component:LoginComponent },
      { path:'signup', component:SignupComponent },
    { path:'search', component:AssignmentComponent },
      
];

export const routes: ModuleWithProviders= RouterModule.forRoot(router);
