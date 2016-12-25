import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeslaBatteryService } from '../../tesla-battery.service';
import { Stat } from '../../models/stat.interface';

@Component({
  selector: 'tesla-battery',
  templateUrl: './tesla-battery.component.html',
  styleUrls: ['./tesla-battery.component.scss'],
  providers: [TeslaBatteryService]
})
export class TeslaBatteryComponent implements OnInit {
  title: string = 'Range Per change';
  tesla: FormGroup;
  stats: Stat[];
  models: any;

  private results : Array<String> = ['60', '60D', '75', '75D', '90D', 'P100D'];

  constructor(public fb : FormBuilder, private batterService: TeslaBatteryService) { }

  ngOnInit() {
    this.models = this.batterService.getModelData();
    this.tesla = this.fb.group({
      config: this.fb.group({
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      })
    });
    this.stats = this.calculateStats(this.results, this.tesla.controls['config'].value);
    this.tesla.controls['config'].valueChanges.subscribe(data => {
      this.stats = this.calculateStats(this.results, data);
    })
  }
  private calculateStats(models, value) : Stat[] {
    return models.map(model => {
      const { speed, temperature, climate, wheels } = value;
      const miles = this.models[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature]
      return {
        model,
        miles
      };
    });
  }

}
