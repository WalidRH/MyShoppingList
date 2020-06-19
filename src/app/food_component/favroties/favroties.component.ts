import { Categorie } from './../../shared/Categorie';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodServiceService } from 'src/app/shared/food-service.service';


@Component({
  selector: 'app-favroties',
  templateUrl: './favroties.component.html',
  styleUrls: ['./favroties.component.scss']
})
export class FavrotiesComponent implements OnInit {
  
  categorie : string;

  constructor(private foodService : FoodServiceService) { 
  }

  ngOnInit(): void {
    this.categorie = "CATEGORIE_FAVORIES";
    this.foodService.setArray(this.categorie);
  }
}
