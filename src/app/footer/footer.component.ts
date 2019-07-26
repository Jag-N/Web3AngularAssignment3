import { Component, OnInit } from '@angular/core';
import { nandaj } from '../nandaj';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user : nandaj = {
    id: 991290805,
    name: "Jag Nanda",
    username: "nandaj",
    campus: "Trafalgar",
    assignTitle: "nandajA3"
  };

  constructor() { }

  ngOnInit() {
  }

}
