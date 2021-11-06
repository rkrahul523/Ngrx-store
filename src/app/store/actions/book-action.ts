import { BOOKS } from "../../model/book";

export const BOOK_LIST_REQUEST = 'list request';
export const BOOK_LIST_SUCCESS = 'list success';


// 1. when  request triggered from home
export class BookListRequestAction {
  readonly type = BOOK_LIST_REQUEST;

  constructor(public deep: { startingvariable: boolean }) {
  }
}

// (a) action triggered from home
export class BookListSuccessAction {
  readonly type = BOOK_LIST_SUCCESS;

  constructor(public payload?: { dataobject: BOOKS[] }) {
  }
}