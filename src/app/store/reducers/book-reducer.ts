import { Action } from "../actions";
import { BOOKS } from "../../model/book";
import { BookState, initialState  } from "../state";
import { BOOK_LIST_REQUEST , BOOK_LIST_SUCCESS} from "../actions/book-action";
import { ActionReducerMap } from "@ngrx/store";




// 2 it goes to reducer and check it there is ant action defined or not
export function BookReducer(state = initialState, action: Action): BookState {
    switch (action.type) {
      case BOOK_LIST_REQUEST: {

        console.log("request",action.deep.startingvariable)
        return {...state, loading: true};
      }


      //(b) reducer match with succes action  and update the action state
      case BOOK_LIST_SUCCESS: {
        const updatedBooks = state.books.concat(action.payload.dataobject);
        return {...state, loading: false, loaded: true, books: updatedBooks};
      }
      default: {
        return state;
      }
    }
  }



// selectors
export const getLoading = (state: BookState) => state.loading;
export const getLoaded = (state: BookState) => state.loaded;

//(c) selecetor will access the current state
export const getBooks = (state: BookState) => state.books;
  