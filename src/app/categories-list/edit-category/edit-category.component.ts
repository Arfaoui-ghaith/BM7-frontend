import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../models/data.service";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{


  constructor(private data: DataService) {
  }

  images: any[] = [
    {name:"Salary Special",image:"https://cdn-icons-png.flaticon.com/24/3135/3135706.png"},{name:"Hand Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/1077/1077976.png"},{name:"Money Special",image:"https://cdn-icons-png.flaticon.com/24/2454/2454282.png"},{name:"Money bag 3D",image:"https://cdn-icons-png.flaticon.com/24/2108/2108625.png"},{name:"Profits Special",image:"https://cdn-icons-png.flaticon.com/24/2936/2936758.png"},{name:"Peso Detailed Flat Circular",image:"https://cdn-icons-png.flaticon.com/24/10506/10506968.png"},{name:"Money Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/631/631200.png"},{name:"Money ",image:"https://cdn-icons-png.flaticon.com/24/61/61584.png"},{name:"Salary Special",image:"https://cdn-icons-png.flaticon.com/24/3135/3135679.png"},{name:"Money Basic Straight",image:"https://cdn-icons-png.flaticon.com/24/1604/1604644.png"},{name:"Money Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/631/631180.png"},{name:"Money Basic Rounded",image:"https://cdn-icons-png.flaticon.com/24/2933/2933116.png"},{name:"Piggy bank Special",image:"https://cdn-icons-png.flaticon.com/24/584/584093.png"},{name:"Give money Detailed Rounded",image:"https://cdn-icons-png.flaticon.com/24/2510/2510727.png"},{name:"Wallet Special",image:"https://cdn-icons-png.flaticon.com/24/584/584067.png"}
  ];
  category?: any;
  selectedImage?: any;

  categoryForm = new FormGroup({
    title: new FormControl(this.category?.title),
    date: new FormControl(this.category?.date),
    selectedImage: new FormControl(this.category?.image)
  });

  save(){}

  ngOnInit(): void {
    this.data.updatedSelectedCategory?.subscribe(v => {
      console.log(v);
      this.categoryForm = new FormGroup({
        title: new FormControl(v.title),
        date: new FormControl(v.date),
        selectedImage: new FormControl(v.image)
      });
      console.log(this.categoryForm.value);
    });
  }

}
