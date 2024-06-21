import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentification/login/login.component';
import { HomeComponent } from './Shared/home/home.component';
import { AddTransferComponent } from './Shared/add-transfer/add-transfer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home',component: HomeComponent },
  { path: 'AddTransfer',component: AddTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

