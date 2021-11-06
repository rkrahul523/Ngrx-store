import * as fromReducer from './book-reducer';
import {ActionReducerMap, createSelector} from '@ngrx/store';
import { RootState } from '../state';




  export const rootReducer: ActionReducerMap<RootState> = {
    booksData: fromReducer.BookReducer
  };

  
  
 

