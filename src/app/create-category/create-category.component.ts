import {Component, OnInit} from '@angular/core';
import {DataService} from "../models/data.service";
import {AuthService} from "../authService/auth.service";
import {MessageService} from "primeng/api";
import {Category} from "../models/category";
import {FormControl, FormGroup} from "@angular/forms";
import {v4 as uuidv4} from "uuid";
import {Color} from "../models/color";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  providers: [MessageService]
})
export class CreateCategoryComponent implements OnInit{
  constructor(
    private data: DataService,
    private auth: AuthService,
    private messageService: MessageService) {
  }

  categories: Category[] = [];
  images: any[] = [
    {name:"Salary Special",image:"https://cdn-icons-png.flaticon.com/24/3135/3135706.png"},
    {name:"Hand Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/1077/1077976.png"},
    {name:"Money Special",image:"https://cdn-icons-png.flaticon.com/24/2454/2454282.png"},
    {name:"Money bag 3D",image:"https://cdn-icons-png.flaticon.com/24/2108/2108625.png"},
    {name:"Profits Special",image:"https://cdn-icons-png.flaticon.com/24/2936/2936758.png"},
    {name:"Peso Detailed Flat Circular",image:"https://cdn-icons-png.flaticon.com/24/10506/10506968.png"},
    {name:"Money Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/631/631200.png"},
    {name:"Money ",image:"https://cdn-icons-png.flaticon.com/24/61/61584.png"},
    {name:"Salary Special",image:"https://cdn-icons-png.flaticon.com/24/3135/3135679.png"},
    {name:"Money Basic Straight",image:"https://cdn-icons-png.flaticon.com/24/1604/1604644.png"},
    {name:"Money Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/631/631180.png"},
    {name:"Money Basic Rounded",image:"https://cdn-icons-png.flaticon.com/24/2933/2933116.png"},{name:"Piggy bank Special",image:"https://cdn-icons-png.flaticon.com/24/584/584093.png"},{name:"Give money Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/2510/2510727.png"},{name:"Wallet Special",image:"https://cdn-icons-png.flaticon.com/24/584/584067.png"}
  ];

  categoryForm = new FormGroup({
    title: new FormControl(),
    date: new FormControl(),
    colorRGB: new FormControl(),
    selectedImage: new FormControl(null)
  });

  selectedImage?: any;
  preview: any;

  checkForm(){
    if(this.categoryForm.value.title == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Title can't be null"});
      return false;
    }
    if(this.categoryForm.value.date == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Date can't be null!"});
      return false;
    }
    if(this.categoryForm.value.selectedImage == null) {
      this.messageService.add({severity: 'error', summary: 'Fail', detail: "Image can't be null!"});
      return false;
    }
    return true;
  }

  save() {
    let condition = this.checkForm();
    if(condition) {
      this.categories.push(new Category(
        uuidv4(),
        <string>this.categoryForm.value.title,
        <string>this.selectedImage.image,
        <string>this.categoryForm.value.date,
        <string>this.auth.getLoggedUser(),
        new Color(this.categoryForm.value.colorRGB["r"],this.categoryForm.value.colorRGB["g"],this.categoryForm.value.colorRGB["b"])
      ));
      this.data.sendCategories(this.categories);
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'New Category Added Successfully !'});
    }
  }

  ngOnInit(): void {
    this.categories = this.data.categories
  }
}
