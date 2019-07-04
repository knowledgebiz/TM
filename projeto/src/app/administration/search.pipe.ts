import { PipeTransform, Pipe } from '@angular/core';
import { Workers } from './Workers';
@Pipe({
  name: 'workerFilter'
})
export class workersFilterPipe implements PipeTransform {
  transform(workers: Workers[], searchTerm: string) {
    if (!workers || !searchTerm) {
      return workers;
    }
    return workers.filter ( worker =>
      worker.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) ;

  }
}
