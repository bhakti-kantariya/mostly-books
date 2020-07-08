import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as actions from '../actions/view-books.action';
import { mergeMap, switchMap, catchError } from 'rxjs/operators';
import { Book, Books } from 'src/app/models/view-books.model';

@Injectable()
export class ViewBooksEffect{
    constructor(private http: HttpClient, private actions$: Actions) { }

    @Effect()
    booksResult$ = this.actions$.pipe(
        ofType<actions.GetBooks>(actions.ActionTypes.GET_BOOKS),
        mergeMap((action) => {
            return this.http.get<Book[]>('http://localhost:8080/allbooks').pipe(
                switchMap((data) => {
                    return [new actions.GetBooksSuccess({tabId:action.payload, books: data})];
                }),
                //If rquest fails, dispatch fail action
                catchError(error => {
                    return [new actions.GetBooksFail('error')];
                })
            );
        })
    );
}
