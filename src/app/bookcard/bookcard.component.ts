import { Component, OnInit ,Input} from '@angular/core';
import { BOOKS } from '../model/book';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.css']
})
export class BookcardComponent implements OnInit {

 @Input('book')  book:BOOKS

  constructor() { }

  ngOnInit() {
  }

}