import { Injectable } from '@angular/core';

import { FateIcon } from './fate-icon.interface';

@Injectable({
  providedIn: 'root'
})
export class FateIconService implements FateIcon {
  // font awesome
  protected iconMapping: any = {
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
    strike: 'strikethrough',
    subscript: 'subscript',
    superscript: 'superscript',
    indent: 'indent',
    outdent: 'outdent',
    ordered: 'list-ol',
    unordered: 'list-ul',
    center: 'align-center',
    justify: 'align-justify',
    left: 'align-left',
    right: 'align-right',
    undo: 'undo-alt',
    redo: 'redo-alt',
    clean: 'eraser',
    link: 'link'
  };

  public getIcon(actionName): string {
    return this.iconMapping[actionName];
  }
}
