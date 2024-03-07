import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelColor', standalone: true
})
export class LevelColorPipe implements PipeTransform {

  transform(level: string): string {
    switch (level) {
      case '0': return 'primary';
      case '1': return 'secondary';
      case '2': return 'tertiary';
      case '3': return 'danger';
      default: return 'medium';
    }
  }

}