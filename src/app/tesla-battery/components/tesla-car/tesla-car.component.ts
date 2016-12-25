import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tesla-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-car.component.html',
  styleUrls: ['./tesla-car.component.scss']
})
export class TeslaCarComponent {
  @Input() wheelsize : number;
  constructor() { }

}
