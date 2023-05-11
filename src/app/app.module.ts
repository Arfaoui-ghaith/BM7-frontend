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


import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgOptimizedImage} from "@angular/common";
import {TagModule} from "primeng/tag";
import {ProgressBarModule} from "primeng/progressbar";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import { EditTransactionComponent } from './transaction-list/edit-transaction/edit-transaction.component';
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {SelectButtonModule} from "primeng/selectbutton";
import {CalendarModule} from "primeng/calendar";
import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsByCategoryChatComponent } from './charts/transactions-by-category-chat/transactions-by-category-chat.component';
import {ColorPickerModule} from "primeng/colorpicker";
import {ChartModule} from "primeng/chart";
import {TimeagoCustomFormatter, TimeagoFormatter, TimeagoIntl, TimeagoModule} from 'ngx-timeago';
import { TransactionsByStatusChatComponent } from './charts/transactions-by-status-chat/transactions-by-status-chat.component';
import { TransactionsByStatusAndCategoriesChartComponent } from './charts/transactions-by-status-and-categories-chart/transactions-by-status-and-categories-chart.component';
import { AmountByStatusChartComponent } from './charts/amount-by-status-chart/amount-by-status-chart.component';
import { StatusByDateChartComponent } from './charts/status-by-date-chart/status-by-date-chart.component';
import { GoalsListComponent } from './goals/goals-list/goals-list.component';
import { CreateGoalComponent } from './create-goal/create-goal.component';
import {TreeTableModule} from "primeng/treetable";


export class MyIntl extends TimeagoIntl {
// do extra stuff here...
}

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
    CreateCategoryComponent,
    EditTransactionComponent,
    EditCategoryComponent,
    TransactionsByCategoryChatComponent,
    TransactionsByStatusChatComponent,
    TransactionsByStatusAndCategoriesChartComponent,
    AmountByStatusChartComponent,
    StatusByDateChartComponent,
    GoalsListComponent,
    CreateGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    TagModule,
    ProgressBarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ToastModule,
    RippleModule,
    DialogModule,
    InputMaskModule,
    InputNumberModule,
    SelectButtonModule,
    CalendarModule,
    HttpClientModule,
    ColorPickerModule,
    ChartModule,
    TimeagoModule.forRoot({
      intl: {provide: TimeagoIntl, useClass: MyIntl},
      formatter: {provide: TimeagoFormatter, useClass: TimeagoCustomFormatter},
    }),
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
