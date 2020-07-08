import { Action } from '@ngrx/store';
import { Book, Books } from 'src/app/models/view-books.model';

export enum ActionTypes {
    GET_BOOKS = '[View Books] Get Books',
    GET_BOOKS_SUCCESS = '[View Books] Get books success',
    GET_BOOKS_FAIL = '[View Books] Get books fail'
}

export class GetBooks implements Action {
    readonly type = ActionTypes.GET_BOOKS;
    constructor(public payload: string) { }
}

export class GetBooksSuccess implements Action {
    readonly type = ActionTypes.GET_BOOKS_SUCCESS;
    constructor(public payload: Books) { }
}

export class GetBooksFail implements Action {
    readonly type = ActionTypes.GET_BOOKS_FAIL;
    constructor(public payload: any) { }
}

/**
 * Union of all actions.
 */
export type Actions = GetBooks | GetBooksSuccess | GetBooksFail;