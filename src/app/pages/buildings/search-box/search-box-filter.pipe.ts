import { Pipe } from '@angular/core';

import { IBuilding } from '../../../core/entities/building/building.interface';

@Pipe({
  name: 'SearchBoxFilter'
})
export class SearchBoxFilter {
  transform(buildings: IBuilding[], args?: string) {
    buildings = buildings ? buildings : [];
    args = args ? args : '';

    let filtered =  buildings.filter(building => {
      return building.code.toUpperCase().indexOf(args.toUpperCase()) > -1;
    });

    return args ? filtered : buildings;
  }

}