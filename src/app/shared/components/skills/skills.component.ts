import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input('data') data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
