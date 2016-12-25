import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NUMBER_CONTROL_ACESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TeslaCounterComponent),
  multi: true
}

@Component({
  selector: 'tesla-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-counter.component.html',
  styleUrls: ['./tesla-counter.component.scss'],
  providers: [NUMBER_CONTROL_ACESSOR]
})
export class TeslaCounterComponent implements ControlValueAccessor {
  @Input() step: number = 1;
  @Input() min: number;
  @Input() max: number;
  @Input() title: string = '';
  @Input() unit: string = '';
  value: number;
  focused: boolean;

  private onTouch: Function;
  private onModelChange: Function;
  constructor() { }
  private onChange(value: number) {
    this.value = value;
    this.onModelChange(value);
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: number) {
    this.value = value;
  }

  increment() {
    if (this.value < this.max) {
      this.onChange(this.value + this.step);
    }
    this.onTouch();
  }
  decrement() {
    if (this.value > this.min) {
      this.onChange(this.value - this.step)
    }
    this.onTouch();
  }

  private onBlur(event: FocusEvent) {
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
  }

  private onKeyUp(event: KeyboardEvent) {
    let handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }
  private onFocus(event: FocusEvent) {
    this.focused = true;
    event.preventDefault();
    event.stopPropagation();
  }
}
