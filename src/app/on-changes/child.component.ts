import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lch-on-changes',
  templateUrl: './child.component.html' ,
  styles: [
    '.persona {background: LightYellow; padding: 8px; margin-top: 8px}',
    'p {background: Yellow; padding: 8px; margin-top: 8px}'
  ]
})
export class ChildComponent implements OnChanges {
  @Input() persona: Object;
  @Input() habilidad: string;
  edad: number = 29;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
  }

  reset() { this.changeLog.length = 0; }
}
