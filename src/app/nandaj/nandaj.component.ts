import { Component, OnInit } from '@angular/core';
import { MYBOOKS } from "../../assets/data/myBooks"

@Component({
  selector: 'app-nandaj',
  templateUrl: './nandaj.component.html',
  styleUrls: ['./nandaj.component.css']
})
export class NandajComponent implements OnInit {

  myBooks = MYBOOKS;
  selectedBookIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  onClickSelectBook(num){
    this.selectedBookIndex = num;
  }
}
