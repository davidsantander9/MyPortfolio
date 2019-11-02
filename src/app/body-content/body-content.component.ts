import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.sass']
})
export class BodyContentComponent implements OnInit {

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
