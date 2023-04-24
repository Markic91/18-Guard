import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { IsAdminGuard } from './core/is-admin.guard';
import { IsConnectedGuard } from './core/is-connected.guard';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "dashboard",
    component: DashBoardComponent, canActivate: [IsConnectedGuard]
  },
  {
    path: "admin",
    component: AdminPageComponent, canActivate: [IsAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
