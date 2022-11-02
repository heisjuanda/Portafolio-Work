import { Component,OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Work';
  mostrar: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.mostrar = true;
      Aos.init();
      Aos.refresh();
    }, 100);
  }
}
