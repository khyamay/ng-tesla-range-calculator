/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeslaBatteryService } from './tesla-battery.service';

describe('TeslaBatteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeslaBatteryService]
    });
  });

  it('should ...', inject([TeslaBatteryService], (service: TeslaBatteryService) => {
    expect(service).toBeTruthy();
  }));
});
