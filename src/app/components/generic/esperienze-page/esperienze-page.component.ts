import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esperienze-page',
  templateUrl: './esperienze-page.component.html',
  styleUrls: ['./esperienze-page.component.scss'],
})
export class EsperienzePageComponent implements OnInit {
  esperienze = [
    {
      title: 'Maggio 2022 - Novembre 2022: App Intrattenimento',
      description: 'Sviluppo di un\'app cross-platform nel settore dell\'intrattenimento.\
      L\'applicazione permette di creare, ricercare, condividere e monitorare eventi, e di\
      segnalare eventuali comportamenti inopportuni da parte degli altri utenti',
      technologies: ['Angular 12', 'Ionic 5', 'Android Studio']
    },
    {
      title: 'Novembre 2022 - Maggio 2022: Consulenza PwC',
      description: 'Durante la mia consulenza per PwC ho lavorato inizialmente alla realizzazione,\
      per il loro reparto R&D, dello snippet frontend per il loro appkit proprietario. Sono passata successivamente\
      allo sviluppo di un software destinato al monitoraggio di operazioni navali quali ad esempio\
      carico e scarico di gas, costi e consumi di navigazione ecc',
      technologies: ['Angular 12']
    },
    {
      title: 'Maggio 2022 - Settembre 2022: App Per Offerta Ripetizioni',
      description: 'Sviluppo di un\'app/web app che permette di pubblicare o ricercare annunci, contattare gli utenti\
      mediante l\'apposita chat, lasciare recensioni e acquistare abbonamenti.',
      technologies: ['Flutter', 'Dart']
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
