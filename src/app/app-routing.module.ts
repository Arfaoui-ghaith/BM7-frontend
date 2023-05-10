import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { CreateTransactionComponent } from "./create-transaction/create-transaction.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {AuthGuard} from "./authService/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transactions',
    component: TransactionListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transactions/create',
    component: CreateTransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesListComponent
  },
  {
    path: 'categories/create',
    component: CreateCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
