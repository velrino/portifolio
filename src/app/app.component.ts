import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  component = {
    url: '/assets/data/data.json'
  };
  data: any;
  step: 'home' | 'skills' | 'contact' | 'portfolio' | 'experiences' = 'home';
  skillsList = [{}, {}]
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getData();
    this.calculateYearOld();
  }

  setStep(step: 'home' | 'skills' | 'contact' | 'portfolio' | 'experiences') {
    this.step = step;
    window.scrollTo(0, 0);
    this.hideSideNav()
  }

  actualStep(step: 'home' | 'skills' | 'contact' | 'portfolio' | 'experiences') {
    return this.step === step;
  }

  async getData() {
    await this.requestService.request(this.component.url).then((response) => this.handleResponse(response));
  }

  handleResponse(response: any) {
    for (let index = 0; index < response.result.skills.length; index++) {
      const element = response.result.skills[index];
      response.result.skills[index].itens = this.sortArray(element.itens, 'value');
    }
    this.data = response.result;
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

  sortArray(array: any[], index: string) {
    return array.sort((a, b) => b[index] - a[index])
  }

  showSideNav = false;
  idSideNav = 'side-nav-menu';
  hideSideNav() {
    const getElement = document.getElementById(this.idSideNav);
    getElement?.classList.remove('animate__slideInRight');
    getElement?.classList.add('animate__slideOutRight');

    setTimeout(() => this.showSideNav = false, 1000)
  }

  sideNavShow() {
    const getElement = document.getElementById(this.idSideNav);

    getElement?.classList.remove('animate__slideOutRight');
    getElement?.classList.add('animate__slideInRight');

    this.showSideNav = true;

  }
}
