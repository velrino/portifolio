import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'divider-header',
  templateUrl: './divider-header.component.html',
  styleUrls: ['./divider-header.component.scss']
})
export class DividerHeaderComponent implements OnInit {

  @Input('data') data: string;
  @Input('icon') icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
