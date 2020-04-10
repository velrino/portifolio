import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  component = {
    url: 'https://raw.githubusercontent.com/velrino/data/master/portifolio/data.json'
  };
  data: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getData();
    this.calculateYearOld();
  }

  async getData() {
    const response = await this.requestService.request(this.component.url);
    if (!response.error) {
      this.data = response.result
    } else if (response.error) {
      this.component.url = '/assets/data/data.json';
      await this.getData();
    }
  }

  getYear() {
    return new Date().getFullYear();
  }

  calculateYearOld() {
    const dates: any = {
      born: new Date(),
      today: new Date('6/10/1996'),
    }
    const daysInYear = 365;

    const diffTime = Math.abs(dates.today - dates.born);
    const diffDays = Math.ceil((diffTime / (1000 * 60 * 60 * 24)) / daysInYear);

    return diffDays - 1;
  }

  checkItemType(item: any, type: string) {
    return item.type == type;
  }

  baseUrl() {
    return window.location.origin;;
  }
}
