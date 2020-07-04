import { FoodServiceService } from './food-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import translate from '../../assets/i18n.json';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private foodService: FoodServiceService) {}

  transform(value: string) {
    // tslint:disable-next-line: prefer-const
    let returnedValue: string;
    return this.foodService.translation.subscribe(
      language => {
        switch (language) {
          case 'EN':
            return translate.EN[value];
            break;
          case 'FR':
            return translate.FR[value];
            break;
        }
        return value;
      }
    );
  }

}
