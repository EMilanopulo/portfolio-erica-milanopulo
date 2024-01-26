import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esperienze-page',
  templateUrl: './esperienze-page.component.html',
  styleUrls: ['./esperienze-page.component.scss'],
})
export class EsperienzePageComponent implements OnInit {
  esperienze = [
    {
      title: 'Applicazione nel settore Intrattenimento',
      periodo: 'Maggio 2022 - Novembre 2022',
      description: 'Sviluppo di un\'app cross-platform nel settore dell\'intrattenimento.\
      L\'applicazione permette di creare, ricercare, condividere e monitorare eventi, e di\
      segnalare eventuali comportamenti inopportuni da parte degli altri utenti',
      technologies: ['Angular 12', 'Ionic 5', 'Android Studio']
    },
    {
      title: 'Consulenza PwC',
      periodo: 'Novembre 2022 - Maggio 2023',
      description: 'Durante la mia consulenza per PwC ho lavorato inizialmente alla realizzazione,\
      per il loro reparto R&D, dello snippet frontend per il loro appkit proprietario. Sono passata successivamente\
      allo sviluppo di un software destinato al monitoraggio di operazioni navali quali ad esempio\
      carico e scarico di gas, costi e consumi di navigazione ecc',
      technologies: ['Angular 12']
    },
    {
      title: 'E-commerce per vendita prodotti animali',
      periodo: 'Maggio 2023 - Settembre 2023',
      description: 'Sviluppo e-commerce per un\'azienda operante nel settore della vendita di prodotti per animali',
      technologies: ['Shopify', 'Liquid']
    },
    {
      title: 'Software di fatturazione',
      periodo: 'Settembre 2023 - Novembre 2023',
      description: 'Sviluppo di un software di fatturazione online, volto a professionisti, consulenti,\
      freelance, agenzie e gruppi di lavoro, che consente di registrare le attività svolte a consuntivo per il cliente,\
      le ore impiegate o gli importi forfettari concordati e di riversare in fatturazione e generare la fattura in pochi istanti.',
      technologies: ['React']
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
