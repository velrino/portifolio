import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/shared/services/request.service';
import { StepEnum } from './shared/interfaces/step.dto';
import { TranslateService } from '@ngx-translate/core';

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
  StepEnum = StepEnum;
  step: StepEnum = StepEnum.home;
  skillsList = [{}, {}]
  countryCodes = ['us', 'br'];
  customLabels = {
    'us': 'English',
    'br': 'Brasil',
  };
  selectedCountryCode = 'br';
  
  constructor(
    private requestService: RequestService,
    private router: Router,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.handleQueryUrl()
    this.getData();
    this.changeSelectedCountryCode()
    this.calculateYearOld();
  }

  handleQueryUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const stepInformed = urlParams.get('step');

    if (!Object.values(StepEnum).includes(stepInformed as any)) return this.setStep(StepEnum.home);

    return this.setStep(stepInformed as StepEnum);
  }

  setStep(step: StepEnum) {
    this.step = step;

    this.router.navigate(
      [],
      { queryParams: { step } }
    );

    window.scrollTo(0, 0);

    this.hideSideNav()
  }

  actualStep = ((step: StepEnum) => this.step === step)
  

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

  getYear = (() => new Date().getFullYear())

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

  languageIndex = 'language';
  changeSelectedCountryCode(value: any = null): void {
    if (value !== null) {
      localStorage.setItem(this.languageIndex, value);
    }
    const language = localStorage.getItem(this.languageIndex);
    let lang = language ? language : 'us';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.selectedCountryCode = lang;
    this.hideSideNav()
  }
}
