import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input('data') data: any;

  constructor() { }

  checkNumberIsEven(value: number) {
    return value % 2 === 0;
  }

  isLeftOrRightClassTimeline(index: number) {
    return this.checkNumberIsEven(index) ? 'left-timeline' : 'right-timeline';
  }

  handleClassContainer(index: number) {
    return 'container-timeline '.concat(this.isLeftOrRightClassTimeline(index));
  }
}
