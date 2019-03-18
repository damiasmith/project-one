import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
     new Recipe('Mashed Potatoes', 'Delicious mashed, red potatoes with garlic',
     'https://www.publicdomainpictures.net/pictures/240000/velka/mashed-potatoes-and-dressing.jpg#.XH8g_wD03D0.link'),
     new Recipe('Mashed Potatoes', 'Delicious mashed, red potatoes with garlic',
     'https://www.publicdomainpictures.net/pictures/240000/velka/mashed-potatoes-and-dressing.jpg#.XH8g_wD03D0.link')
    ];
  constructor() { }

  ngOnInit() {
  }

}
