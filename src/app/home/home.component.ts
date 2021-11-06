import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin } from 'rxjs';
import { ApiService } from '../api.service';
import { InteractionService } from '../interaction.service';
import { BOOKS } from '../model/book';
import { BookListRequestAction, BookListSuccessAction } from '../store/actions/book-action';
import { getAllBooks, getBooksLoaded, getBooksLoading, RootState } from '../store/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  booklist: BOOKS[] =[];


  constructor(private api: ApiService,
    private store: Store<RootState>,
    private interaction: InteractionService
    ) { }

  ngOnInit() {
    this.store.select(getBooksLoading).subscribe(res=> console.log("loading ", res))
this.store.select(getBooksLoaded).subscribe(res=> console.log("loaded ", res))
    //this.initialgetbook()
    //this.efficientWay()
    this.bookRepo()
  }


initialgetbook(){
this.store.dispatch(new BookListRequestAction({startingvariable : false}));


// go with allphabet
this.api.getBooks().subscribe((res: BOOKS[])=>{
this.store.dispatch(new BookListSuccessAction({dataobject: res}));
})
this.store.select(getAllBooks).subscribe(res=>{
console.log(res)
this.booklist= res;
})

}

efficientWay(){
  const loading$ = this.store.select(getBooksLoading);
  const loaded$ = this.store.select(getBooksLoaded);
 const getBooksData$ = this.store.select(getAllBooks);
 console.log("we")

 combineLatest([loading$,loaded$,getBooksData$]).subscribe((data)=>{
  if (!data[0] && !data[1]) {
   // this.store.dispatch(new BookListRequestAction());
    this.api.getBooks().subscribe((res: BOOKS[])=>{
      this.store.dispatch(new BookListSuccessAction({dataobject: res}));
     
      })     
  }
  this.booklist= data[2];
 })
//  getBooksData$.subscribe(data=>  this.booklist= data);
}



bookRepo(){
  const BooksData$ = this.interaction.getBooksList()[1];
  BooksData$.subscribe(data => {
    this.booklist= data;
     });
}

}