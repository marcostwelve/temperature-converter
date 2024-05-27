import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  temperature: number = 0;
  scale: string = 'C';
  result: number | null = null;
  targetScale: string = '';

  convert(): void {
    if(this.scale === 'C') {
      this.result = ((this.temperature * 9 ) / 5) + 32;
      this.targetScale = 'F';
    } else {
      this.result = ((this.temperature - 32) * 5) / 9;
      this.targetScale = 'C';
    }
  }

}
