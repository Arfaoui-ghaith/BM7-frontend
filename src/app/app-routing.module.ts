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

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'transactions',
    component: TransactionListComponent
  },
  {
    path: 'transactions/create',
    component: CreateTransactionComponent
  },
  {
    path: 'categories',
    component: CategoriesListComponent
  },
  {
    path: 'categories/create',
    component: CreateCategoryComponent
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
