import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myurl: string;

  constructor() {
    this.myurl = 'https://www.bolaoesportivo.com.br'
  }

}
