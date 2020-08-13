import {
  Component,
  Input,
  ElementRef,
  HostListener,
  ComponentFactoryResolver
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { defaultButtons } from '../fate-ui/fate-ui.component';
import { FateControllerService } from '../fate-controller.service';
import { FateParserService } from '../fate-parser.service';
import { FateIconService } from '../fate-icon.service';
import { ButtonsGroup } from '../types';

let instanceCounter = 0;

@Component({
  selector: 'fate-bootstrap',
  templateUrl: './fate-bootstrap.component.html',
  styleUrls: ['./fate-bootstrap.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FateBootstrapComponent,
      multi: true
    }
  ]
})
export class FateBootstrapComponent implements ControlValueAccessor {
  @Input()
  row: number;

  @Input()
  placeholder: string;

  @Input()
  public buttons: Array<string | ButtonsGroup> = defaultButtons;

  // implentation of ControlValueAccessor:
  protected changed = new Array<(value: string) => void>();
  protected clickOngoing: boolean = false;

  public passthrough: string;
  public uiId;
  public uiVisible;

  @HostListener('focusout', ['$event'])
  public blur(event: any) {
    if (!this.clickOngoing) {
      this.uiVisible = false;
    }
  }

  @HostListener('mousedown', ['$event'])
  public mousedown(event: any) {
    this.clickOngoing = true;
  }

  @HostListener('mouseup', ['$event'])
  public mouseup(event: any) {
    this.clickOngoing = false;
  }

  @HostListener('focusin', ['$event'])
  public focus(event: any) {
    this.uiVisible = true;
    console.info('boostrap focus!');
  }

  constructor(
    el: ElementRef,
    controller: FateControllerService,
    parser: FateParserService,
    icon: FateIconService,
    factoryResolver: ComponentFactoryResolver
  ) {
    this.uiId = 'bootstrap-' + instanceCounter++;
  }

  public writeValue(value: string) {
    this.passthrough = value;
  }

  public registerOnChange(fn: (value: string) => void) {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: () => void) {}

  // change callback
  public onChange(value) {
    this.passthrough = value;
    this.changed.forEach(f => f(value));
  }
}
