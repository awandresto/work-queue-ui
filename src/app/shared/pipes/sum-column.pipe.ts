import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumColumn'
})
export class SumColumnPipe implements PipeTransform {
  transform(items: any[], key: string): number {
    if (!Array.isArray(items) || !key) return 0;

    return items.reduce((total, item) => {
      const value = item?.[key];
      return typeof value === 'number' ? total + value : total;
    }, 0);
  }
}
