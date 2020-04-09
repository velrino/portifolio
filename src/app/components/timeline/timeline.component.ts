import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

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
