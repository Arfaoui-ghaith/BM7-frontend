import {Component, OnInit} from '@angular/core';
import {AuthService} from "../authService/auth.service";
import {DataService} from "../models/data.service";
import {Transaction} from "../models/transaction";
import {Table} from "primeng/table";
import {Category} from "../models/category";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit{

  protected readonly Date = Date;

  value: any;

  categoryDataSource: Category[] = [];

  categories: { id: string, date: string; image: string; title: string }[] = [];

  loading: boolean = true;

  applyFilterGlobal($event: any) {
    return ($event.target as HTMLInputElement).value;
  }

  clear(table: Table) {
    table.clear();
  }

  constructor(private auth: AuthService, private data: DataService) {
  }

  visible?: boolean;

  showDialog(category: Category) {
    this.data.sendSelectedCategory(category);
    this.visible = true;
  }

  deleteCategory(category : Category){
    this.categories = this.categories.filter(c => c.id != category.id)
  }

  ngOnInit(): void {
    this.data.updatedCategories?.subscribe(v => this.categoryDataSource=v);
    if(this.auth.isLoggedIn()){
      this.categories = this.categoryDataSource
        .filter(c => c.user == this.auth.getLoggedUser())
        .map(c => {
          return {
            id: c.id,
            title: c.title,
            image: c.image,
            date: c.createdAt,
          }
        });
    }

    console.log(this.categories,this.categoryDataSource);
    this.loading = false;
  }

}
