import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = {
    age: 21,
    text: "Don't work hard. <br> Work intelligent.",
    location: {
      country: "Brasil",
      state: "São Paulo",
    },
    knowledges: [
      {
        type: 'skill',
        icon: 'fab fa-github fa-2x animated infinite pulse',
        name: 'skills',
        data: [
          {
            title: 'Lorem',
            itens: ['NodeJs', 'Angular']
          },
          {
            title: 'Other',
            itens: ['Flutter', 'Dart', 'APIs']
          },
        ]
      },
      {
        type: 'timeline',
        icon: 'fab fa-github fa-2x animated infinite pulse',
        name: 'experiences',
        data: [
          {
            title: 'Lorem',
            text: 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum',
            list: {
              show: true,
              title: 'example',
              itens: ['NodeJs', 'Angular']
            },
            link: {
              show: true,
              label: 'example',
              url: 'example',
            }
          },
          {
            title: 'Shazam',
            text: 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum',
            list: {
              show: false,
              title: 'example',
              itens: ['NodeJs', 'Angular']
            },
            link: {
              show: true,
              label: 'example',
              url: 'example',
            }
          },
          {
            title: 'Shazam',
            text: 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum',
            list: {
              show: true,
              title: 'example',
              itens: ['NodeJs', 'Angular']
            },
            link: {
              show: false,
              label: 'example',
              url: 'example',
            }
          }
        ]
      }
    ]
  }

  ngOnInit() {
    this.calculateYearOld();
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
    const diffDays = Math.ceil((diffTime / (1000 * 60 * 60 * 24))/daysInYear);

    return diffDays-1;
  }
}
