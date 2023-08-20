import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./../app/home/home.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: "marriage"
  },
  {
    path: "",
    redirectTo: "/marriage",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
