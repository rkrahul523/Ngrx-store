import { ActionReducerMap } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { BOOKS } from "../../model/book";
import * as fromReducer from '../reducers/book-reducer';

//1 
export interface  BookState {
  loading: boolean;
 loaded: boolean;
 books: BOOKS[];
 }

 // 2
 export const initialState: BookState ={
 loading: false,
 loaded: false,
 books: []
 }

  // 3
  export interface RootState {
    booksData: BookState
  }

// 4
  export const getUserState = (state: RootState) => state.booksData;
  
  export const getBooksLoaded = createSelector(getUserState, fromReducer.getLoaded);
  export const getBooksLoading = createSelector(getUserState, fromReducer.getLoading);


  //(d) we subscribe below getallbooks selector
  export const getAllBooks = createSelector(getUserState, fromReducer.getBooks);

 



