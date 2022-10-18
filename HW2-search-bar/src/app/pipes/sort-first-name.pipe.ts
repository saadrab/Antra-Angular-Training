import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'sortFirstName',
})
export class SortFirstNamePipe implements PipeTransform {
  transform(users: User[], reverse: boolean): User[] {
    if (!reverse) {
      return users.sort((a, b) => (a.firstName < b.firstName ? -1 : 1));
    } else {
      return users.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
    }
  }
}
