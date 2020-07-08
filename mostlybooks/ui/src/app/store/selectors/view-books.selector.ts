import { State } from '../index'
import { createSelector } from '@ngrx/store';

export const viewBooksState = (state: State) => state.viewBooks;
export const viewBooks = (tabId: string) => createSelector(viewBooksState, state => state.entities[tabId] ? state.entities[tabId].books : [])