import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { CreateCategoryComponent } from './create-category/create-category.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    TransactionListComponent,
    CategoriesListComponent,
    CreateTransactionComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
