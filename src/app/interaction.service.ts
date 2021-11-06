import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable ,combineLatest} from 'rxjs';
import { ApiService } from './api.service';
import { BOOKS } from './model/book';
import { BookListRequestAction, BookListSuccessAction } from './store/actions/book-action';
import { getAllBooks, getBooksLoaded, getBooksLoading, RootState } from './store/state';

@Injectable()
export class InteractionService {

  constructor(
    private api: ApiService,
    private store: Store<RootState>
  ) { }


  getBooksList(forceFlag = false): [Observable<boolean>, Observable<BOOKS[]>] {
       
    const loading$ = this.store.select(getBooksLoading);
    const loaded$ = this.store.select(getBooksLoaded);
    const getBooksData$ = this.store.select(getAllBooks);

    combineLatest([loading$,loaded$]).subscribe((data)=>{
      if (!data[0] && !data[1] || forceFlag) {
        // this.store.dispatch(new BookListRequestAction());
         this.api.getBooks().subscribe((res: BOOKS[])=>{
           this.store.dispatch(new BookListSuccessAction({dataobject: res}));
          
           })     
       }
    })       
      return [loaded$, getBooksData$];
   }

}