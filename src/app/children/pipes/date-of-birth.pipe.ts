import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateOfBirth'
})
export class DateOfBirthPipe implements PipeTransform {

  transform(value: any): any {
    return null;
  }

}
