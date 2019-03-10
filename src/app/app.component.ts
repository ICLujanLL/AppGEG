import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GEG - Grupos de Educadores Google';
  constructor(private router: Router){}
  events: string[] = [];
  opened: boolean;

  public nav(x){
    this.router.navigateByUrl('/'.concat(x));
  } 
}
