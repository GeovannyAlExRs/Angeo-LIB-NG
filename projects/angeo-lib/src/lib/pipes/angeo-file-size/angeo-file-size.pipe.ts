import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angeoFileSize',
  standalone: true,
})
export class AngeoFileSizePipe implements PipeTransform {
  private UNITS = ['B', 'KB', 'MB', 'GB'];

  transform(sizeInBytes: number): string {
    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, this.UNITS.length - 1);

    const size = sizeInBytes / Math.pow(1024, power);
    const formattedSize = Math.round(size * 100) / 100;
    const unit = this.UNITS[power];

    return size ? `${formattedSize} ${unit}` : '0';
  }
}
