import { Component, OnInit } from '@angular/core';
import { nandaj } from "../nandaj";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
