import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe (
      'Test Recipe','This is Test Desc','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    ),
    new Recipe(
      'Test Recipe','This is Test Desc','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
