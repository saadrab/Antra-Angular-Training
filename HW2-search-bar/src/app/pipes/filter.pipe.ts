import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchTerm: string): User[] {
    if (!users) return users;
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
