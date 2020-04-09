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
        type: 'galery',
        icon: 'fas fa-trophy fa-2x animated infinite pulse',
        name: 'skills',
        data: [
          {
            title: 'Descripto',
            img: '/assets/imgs/descripto.png',
            links: [{
              show: true,
              label: 'Show in Play Store',
              url: 'https://play.google.com/store/apps/details?id=br.com.velrino.zodddemo',
            }],
            skills: [
              {
                url: 'https://stackshare.io/unity-3d',
                label: 'Unity 3D',
              },
              {
                url: 'https://stackshare.io/blender',
                label: 'Blender',
              },
              {
                url: 'https://stackshare.io/c-sharp',
                label: 'C#',
              }
            ]
          },
          {
            title: 'Other',
            links: [{
              show: true,
              label: 'example',
              url: 'example',
            }],
            skills: [
              {
                url: 'https://stackshare.io/unity-3d',
                label: 'Unity 3D',
              },
              {
                url: 'https://stackshare.io/blender',
                label: 'Blender',
              },
              {
                url: 'https://stackshare.io/c-sharp',
                label: 'C#',
              }
            ]
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
              skills: [
                {
                  url: 'https://stackshare.io/unity-3d',
                  label: 'Unity 3D',
                },
                {
                  url: 'https://stackshare.io/blender',
                  label: 'Blender',
                },
                {
                  url: 'https://stackshare.io/c-sharp',
                  label: 'C#',
                }
              ]
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
              skills: [
                {
                  url: 'https://stackshare.io/unity-3d',
                  label: 'Unity 3D',
                },
                {
                  url: 'https://stackshare.io/blender',
                  label: 'Blender',
                },
                {
                  url: 'https://stackshare.io/c-sharp',
                  label: 'C#',
                }
              ]
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
              skills: [
                {
                  url: 'https://stackshare.io/unity-3d',
                  label: 'Unity 3D',
                },
                {
                  url: 'https://stackshare.io/blender',
                  label: 'Blender',
                },
                {
                  url: 'https://stackshare.io/c-sharp',
                  label: 'C#',
                }
              ]
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
    const diffDays = Math.ceil((diffTime / (1000 * 60 * 60 * 24)) / daysInYear);

    return diffDays - 1;
  }

  checkItemType(item: any, type: string) {
    return item.type == type;
  }

  baseUrl(){
    const teste = window.location.origin;
    console.log(teste)
    return teste;
  }
}
