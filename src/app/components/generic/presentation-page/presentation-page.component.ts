import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss']
})
export class PresentationPageComponent implements OnInit {

  presentation: string = 'La laurea in Sviluppo Interculturale dei Sistemi Turistici mi ha permesso di\
  sviluppare conoscenze in diversi ambiti, a partire da quello umanistico e culturale,\
  fino a quello economico e di marketing. Durante il percorso ho inoltre potuto\
  mettere in pratica e sperimentare la mia passione per l\'informatica e il digitale, cosa che mi\
  ha spinto, al termine degli studi, a sviluppare una tesi orientata a tali tematiche mediante\
  lo sviluppo di una mappa interattiva pensata per favorire la visita ai luoghi culturali e artisitci di Padova\
  per le persone con disabilità.\
  L\'ultimo anno di università ho poi scoperto la programmazione e ne sono rimasta ammagliata. Ho capito che\
  avrei potuto passare ore a programmare senza che questo mi pesasse e sono quindi giunta alla conclusione\
  che avrei dovuto trasformare questa mia passione in un possibile lavoro.\
  Ho quindi deciso di intraprendere un nuovo percorso con Epicode che mi ha portato, a Maggio 2022,\
  ad essere assunta come frontend developer nella mia attuale Azienda. Durante\
  il mio primo anno di lavoro, oltre ad approfondire le conoscenze già in possesso,\
  ne ho acquisite di nuove grazie l\'uso di tecnologie e framework quali ad esempio,\
  Angular, React e Ionic.'

  constructor() { }

  ngOnInit(): void {
  }

}
