import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Stat } from '../../models/stat.interface';

@Component({
  selector: 'tesla-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-stats.component.html',
  styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent {
  @Input() stats : Stat[];
  constructor() { }

}
